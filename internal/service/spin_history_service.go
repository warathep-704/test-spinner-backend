package service

import (
	"nextzy-spinner-backend/internal/repository"
	"nextzy-spinner-backend/prisma/db"
)

type SpinHistoryService interface {
	GetUserSpinHistory(userId string, page int) ([]db.SpinHistoryModel, int, error)
	GetAllSpinHistory(page int) ([]db.SpinHistoryModel, int, error)
	UserSpin(userId string, point int) (*db.UserModel, error)
}

type spinHistoryServiceImpl struct {
	spinHistoryRepository repository.SpinHistoryRepository
	userRepository        repository.UserRepository
}

func NewSpinHistoryService(spinHistoryRepository repository.SpinHistoryRepository, userRepository repository.UserRepository) *spinHistoryServiceImpl {
	return &spinHistoryServiceImpl{spinHistoryRepository: spinHistoryRepository, userRepository: userRepository}
}

func (s *spinHistoryServiceImpl) GetUserSpinHistory(userId string, page int) ([]db.SpinHistoryModel, int, error) {
	offset := (page - 1) * 30
	limit := 30

	spinHistory, total, err := s.spinHistoryRepository.GetUserSpinHistory(userId, offset, limit)
	if err != nil {
		return nil, 0, err
	}

	return spinHistory, total, nil
}

func (s *spinHistoryServiceImpl) GetAllSpinHistory(page int) ([]db.SpinHistoryModel, int, error) {
	offset := (page - 1) * 30
	limit := 30

	spinHistory, total, err := s.spinHistoryRepository.GetAllSpinHistory(offset, limit)
	if err != nil {
		return nil, 0, err
	}

	return spinHistory, total, nil
}

func (s *spinHistoryServiceImpl) UserSpin(userId string, point int) (*db.UserModel, error) {
	userInfo, err := s.userRepository.GetUser("", userId)
	if err != nil {
		return nil, err
	}

	totalPoint := userInfo.TotalPoint + point

	userUpdated, err := s.userRepository.UpdateUserPoint(userId, totalPoint)
	if err != nil {
		return nil, err
	}

	_, err = s.spinHistoryRepository.CreateUserSpinHistory(userId, point)
	if err != nil {
		return nil, err
	}

	userUpdated.TotalPoint = totalPoint

	return userUpdated, nil
}
