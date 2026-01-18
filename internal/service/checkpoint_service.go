package service

import (
	"nextzy-spinner-backend/internal/repository"
	"nextzy-spinner-backend/prisma/db"
)

type CheckpointService interface {
	GetUserCheckpoint(userId string) ([]db.UserCheckpointRewardModel, error)
	GetCheckpoint() ([]db.CheckpointModel, error)
	ReceiveCheckpointReward(userId, checkpointId string) (*db.UserCheckpointRewardModel, error)
}

type CheckpointServiceImpl struct {
	checkpointRepository repository.CheckpointRepository
}

func NewCheckpointService(CheckpointRepository repository.CheckpointRepository) *CheckpointServiceImpl {
	return &CheckpointServiceImpl{checkpointRepository: CheckpointRepository}
}

func (s *CheckpointServiceImpl) GetCheckpoint() ([]db.CheckpointModel, error) {
	checkpoint, err := s.checkpointRepository.GetCheckpoint()
	if err != nil {
		return nil, err
	}

	return checkpoint, nil
}

func (s *CheckpointServiceImpl) GetUserCheckpoint(userId string) ([]db.UserCheckpointRewardModel, error) {
	userCheckpoint, err := s.checkpointRepository.GetUserCheckpoint(userId)
	if err != nil {
		return nil, err
	}

	return userCheckpoint, nil
}

func (s *CheckpointServiceImpl) ReceiveCheckpointReward(userId, checkpointId string) (*db.UserCheckpointRewardModel, error) {
	userCheckpoint, err := s.checkpointRepository.ReceiveCheckpointReward(userId, checkpointId)
	if err != nil {
		return nil, err
	}

	return userCheckpoint, nil
}
