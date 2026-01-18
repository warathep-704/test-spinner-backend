package repository

import (
	"context"
	"nextzy-spinner-backend/prisma/db"
)

type WheelRewardRepository interface {
	GetWheelRewards() ([]db.WheelRewardModel, error)
}

type wheelRewardRepositoryImpl struct {
	client *db.PrismaClient
}

func NewWheelRewardRepository(client *db.PrismaClient) *wheelRewardRepositoryImpl {
	return &wheelRewardRepositoryImpl{client: client}
}

func (r *wheelRewardRepositoryImpl) GetWheelRewards() ([]db.WheelRewardModel, error) {

	wheelRewards, err := r.client.WheelReward.FindMany().Exec(context.Background())

	if err != nil {
		return nil, err
	}

	return wheelRewards, err
}
