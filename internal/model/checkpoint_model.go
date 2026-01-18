package model

import "github.com/warathep/nextzy-spinner-backend/prisma/db"

type UserCheckpointResponse struct {
	Checkpoints     []db.CheckpointModel           `json:"checkpoints"`
	UserCheckpoints []db.UserCheckpointRewardModel `json:"userCheckpoints"`
}

type ReceiveCheckpointRewardRequest struct {
	UserId       string `json:"user_id" binding:"required"`
	CheckpointId string `json:"checkpoint_id" binding:"required"`
}
