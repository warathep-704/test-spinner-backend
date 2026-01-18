package server

import (
	checkpoint "nextzy-spinner-backend/internal/controller/checkpoint"
	spinhistory "nextzy-spinner-backend/internal/controller/spin_history"
	user "nextzy-spinner-backend/internal/controller/user"
	wheelreward "nextzy-spinner-backend/internal/controller/wheel_reward"
	"nextzy-spinner-backend/internal/repository"
	"nextzy-spinner-backend/internal/service"
	"nextzy-spinner-backend/prisma/db"

	"github.com/gin-gonic/gin"
)

func RegisterRoutes(r *gin.Engine, db *db.PrismaClient) {

	// check point
	checkpointRepo := repository.NewCheckpointRepository(db)
	checkpointServ := service.NewCheckpointService(checkpointRepo)

	// user
	userRepo := repository.NewUserRepository(db)
	userServ := service.NewUserService(userRepo)

	// spin history
	spinHistoryRepo := repository.NewSpinHistoryRepository(db)
	spinHistoryServ := service.NewSpinHistoryService(spinHistoryRepo, userRepo)

	// wheel reward
	wheelRewardRepo := repository.NewWheelRewardRepository(db)
	wheelRewardServ := service.NewWheelRewardService(wheelRewardRepo)

	api := r.Group("/api")

	// check point
	checkpoint.RegisterRouter(api, checkpointServ)

	// spin history
	spinhistory.RegisterRouter(api, spinHistoryServ)

	// user
	user.RegisterRouter(api, userServ)

	// wheel reward
	wheelreward.RegisterRouter(api, wheelRewardServ)
}
