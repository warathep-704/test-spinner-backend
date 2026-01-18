package model

import "nextzy-spinner-backend/prisma/db"

type SpinHistoriesResponse struct {
	SpinHistories []db.SpinHistoryModel `json:"spinHistories"`
	Total         int                   `json:"total"`
}

type UserSpinRequest struct {
	UserId string `json:"user_id" binding:"required"`
	Point  int    `json:"point" binding:"required"`
}
