package service

import (
	"nextzy-spinner-backend/internal/repository"
	"nextzy-spinner-backend/prisma/db"
)

type WheelRewardService interface {
	GetWheelRewards() ([]db.WheelRewardModel, error)
}

type wheelRewardServiceImpl struct {
	wheelRewardRepository repository.WheelRewardRepository
}

func NewWheelRewardService(wheelRewardRepository repository.WheelRewardRepository) *wheelRewardServiceImpl {
	return &wheelRewardServiceImpl{wheelRewardRepository: wheelRewardRepository}
}

func (s *wheelRewardServiceImpl) GetWheelRewards() ([]db.WheelRewardModel, error) {

	wheelReward, err := s.wheelRewardRepository.GetWheelRewards()

	if err != nil {
		return nil, err
	}

	return wheelReward, nil
}
