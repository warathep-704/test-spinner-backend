package repository

import (
	"context"
	"nextzy-spinner-backend/internal/utils"
	"nextzy-spinner-backend/prisma/db"
)

type CheckpointRepository interface {
	GetCheckpoint() ([]db.CheckpointModel, error)
	GetUserCheckpoint(userId string) ([]db.UserCheckpointRewardModel, error)
	ReceiveCheckpointReward(userId, checkpointId string) (*db.UserCheckpointRewardModel, error)
}

type CheckpointRepositoryImpl struct {
	client *db.PrismaClient
}

func NewCheckpointRepository(client *db.PrismaClient) *CheckpointRepositoryImpl {
	return &CheckpointRepositoryImpl{client: client}
}

func (r *CheckpointRepositoryImpl) GetCheckpoint() ([]db.CheckpointModel, error) {
	checkPoints, err := r.client.Checkpoint.FindMany(db.Checkpoint.IsActive.Equals(true)).Exec(context.Background())
	if err != nil {
		return nil, err
	}

	return checkPoints, err
}

func (r *CheckpointRepositoryImpl) GetUserCheckpoint(userId string) ([]db.UserCheckpointRewardModel, error) {

	userCheckpoints, err := r.client.UserCheckpointReward.
		FindMany(
			db.UserCheckpointReward.UserID.Equals(userId),
		).
		With(
			db.UserCheckpointReward.Checkpoint.Fetch(),
		).
		OrderBy(db.UserCheckpointReward.ReceivedAt.Order(db.SortOrderDesc)).
		Exec(context.Background())

	if err != nil {
		return nil, err
	}

	return userCheckpoints, nil
}

func (r *CheckpointRepositoryImpl) ReceiveCheckpointReward(userId, checkpointId string) (*db.UserCheckpointRewardModel, error) {
	id := utils.CreateIdentifier(12)

	userCheckpoints, err := r.client.UserCheckpointReward.CreateOne(
		db.UserCheckpointReward.ID.Set(id),
		db.UserCheckpointReward.User.Link(
			db.User.ID.Equals(userId),
		),
		db.UserCheckpointReward.Checkpoint.Link(
			db.Checkpoint.ID.Equals(checkpointId),
		),
	).
		With(
			db.UserCheckpointReward.Checkpoint.Fetch(),
		).
		Exec(context.Background())

	if err != nil {
		return nil, err
	}

	return userCheckpoints, nil
}
