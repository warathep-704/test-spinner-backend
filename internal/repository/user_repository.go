package repository

import (
	"context"
	"nextzy-spinner-backend/internal/utils"
	"nextzy-spinner-backend/prisma/db"
	"strings"
)

type UserRepository interface {
	CheckExsitingUser(userName string) (bool, error)
	GetUser(userName, userId string) (*db.UserModel, error)
	CreateUser(userName string) (*db.UserModel, error)
	UpdateUserPoint(userId string, totalPoint int) (*db.UserModel, error)
}

type UserRepositoryImpl struct {
	client *db.PrismaClient
}

func NewUserRepository(client *db.PrismaClient) *UserRepositoryImpl {
	return &UserRepositoryImpl{client: client}
}

func (r UserRepositoryImpl) CreateUser(userName string) (*db.UserModel, error) {
	id := utils.CreateIdentifier(12)
	userNameLower := strings.ToLower(userName)

	user, err := r.client.User.CreateOne(
		db.User.ID.Set(id),
		db.User.UserName.Set(userName),
		db.User.UserNameLower.Set(userNameLower),
		db.User.TotalPoint.Set(0),
	).Exec(context.Background())

	if err != nil {
		return nil, err
	}

	return user, nil
}

func (r UserRepositoryImpl) CheckExsitingUser(userName string) (bool, error) {
	userNameLower := strings.ToLower(userName)

	_, err := r.client.User.
		FindFirst(
			db.User.UserNameLower.Equals(userNameLower),
		).
		Exec(context.Background())

	if err != nil {
		if db.IsErrNotFound(err) {
			return false, nil
		}
		return false, err
	}

	return true, nil
}

func (r UserRepositoryImpl) GetUser(userName, userId string) (*db.UserModel, error) {
	var user *db.UserModel
	var err error

	if userId != "" {
		user, err = r.client.User.
			FindFirst(
				db.User.ID.Equals(userId),
			).
			Exec(context.Background())

		if err != nil {
			if db.IsErrNotFound(err) {
				return nil, nil
			}
			return nil, err
		}
	} else {

		userNameLower := strings.ToLower(userName)
		user, err = r.client.User.
			FindFirst(
				db.User.UserNameLower.Equals(userNameLower),
			).
			Exec(context.Background())

		if err != nil {
			if db.IsErrNotFound(err) {
				return nil, nil
			}
			return nil, err
		}
	}

	return user, nil
}

func (r UserRepositoryImpl) UpdateUserPoint(userId string, totalPoint int) (*db.UserModel, error) {

	user, err := r.client.User.FindUnique(
		db.User.ID.Equals(userId),
	).Update(
		db.User.TotalPoint.Set(totalPoint),
	).Exec(context.Background())

	if err != nil {
		return nil, err
	}

	return user, nil
}
