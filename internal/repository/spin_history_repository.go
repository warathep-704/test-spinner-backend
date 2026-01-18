package repository

import (
	"context"
	"nextzy-spinner-backend/internal/model"
	"nextzy-spinner-backend/internal/utils"
	"nextzy-spinner-backend/prisma/db"
	"strconv"
)

type SpinHistoryRepository interface {
	GetUserSpinHistory(userId string, offset int, limit int) ([]db.SpinHistoryModel, int, error)
	GetAllSpinHistory(offset int, limit int) ([]db.SpinHistoryModel, int, error)
	CreateUserSpinHistory(userId string, point int) (*db.SpinHistoryModel, error)
}

type spinHistoryRepositoryImpl struct {
	client *db.PrismaClient
}

func NewSpinHistoryRepository(client *db.PrismaClient) *spinHistoryRepositoryImpl {
	return &spinHistoryRepositoryImpl{client: client}
}

func (r *spinHistoryRepositoryImpl) GetUserSpinHistory(userId string, offset int, limit int) ([]db.SpinHistoryModel, int, error) {

	spinHistory, err := r.client.SpinHistory.
		FindMany(
			db.SpinHistory.UserID.Equals(userId),
		).
		With(
			db.SpinHistory.User.Fetch(),
		).
		Skip(offset).
		Take(limit).
		OrderBy(
			db.SpinHistory.CreatedAt.Order(db.SortOrderDesc),
		).
		Exec(context.Background())

	if err != nil {
		return nil, 0, err
	}

	var totalResult []model.TotalResult
	err = r.client.Prisma.QueryRaw(
		`SELECT COUNT(*) as total FROM spin_history AS sh
		WHERE sh.user_id = $1;`,
		userId,
	).Exec(context.Background(), &totalResult)

	if err != nil {
		return nil, 0, err
	}

	total := 0
	if len(totalResult) > 0 {
		total, _ = strconv.Atoi(totalResult[0].Total)
	}

	return spinHistory, total, nil
}

func (r *spinHistoryRepositoryImpl) GetAllSpinHistory(offset int, limit int) ([]db.SpinHistoryModel, int, error) {

	spinHistory, err := r.client.SpinHistory.
		FindMany().
		With(
			db.SpinHistory.User.Fetch(),
		).
		OrderBy(
			db.SpinHistory.CreatedAt.Order(db.DESC),
		).
		Skip(offset).
		Take(limit).
		Exec(context.Background())

	if err != nil {
		return nil, 0, err
	}

	var totalResult []model.TotalResult
	err = r.client.Prisma.QueryRaw(
		`SELECT COUNT(*) as total FROM spin_history AS sh;`,
	).Exec(context.Background(), &totalResult)

	if err != nil {
		return nil, 0, err
	}

	total := 0
	if len(totalResult) > 0 {
		total, _ = strconv.Atoi(totalResult[0].Total)
	}

	return spinHistory, total, nil
}

func (r *spinHistoryRepositoryImpl) CreateUserSpinHistory(userId string, point int) (*db.SpinHistoryModel, error) {
	id := utils.CreateIdentifier(12)

	spinHistory, err := r.client.SpinHistory.CreateOne(
		db.SpinHistory.ID.Set(id),
		db.SpinHistory.RewardPoint.Set(point),
		db.SpinHistory.User.Link(
			db.User.ID.Equals(userId),
		),
	).Exec(context.Background())

	if err != nil {
		return nil, err
	}
	return spinHistory, nil
}
