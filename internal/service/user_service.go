package service

import (
	"nextzy-spinner-backend/internal/repository"
	"nextzy-spinner-backend/prisma/db"
)

type UserService interface {
	CreateUser(userName string) (*db.UserModel, error)
	CheckExsitingUser(userName string) (bool, error)
	GetUser(userName string) (*db.UserModel, error)
}

type userServiceImpl struct {
	userRepository repository.UserRepository
}

func NewUserService(UserRepository repository.UserRepository) *userServiceImpl {
	return &userServiceImpl{userRepository: UserRepository}
}

func (s *userServiceImpl) CreateUser(userName string) (*db.UserModel, error) {
	user, err := s.userRepository.CreateUser(userName)

	if err != nil {
		return nil, err
	}

	return user, nil
}

func (s *userServiceImpl) CheckExsitingUser(userName string) (bool, error) {

	isExist, err := s.userRepository.CheckExsitingUser(userName)

	if err != nil {
		return false, err
	}

	return isExist, nil
}

func (s *userServiceImpl) GetUser(userName string) (*db.UserModel, error) {

	user, err := s.userRepository.GetUser(userName, "")

	if err != nil {
		return nil, err
	}

	return user, nil
}
