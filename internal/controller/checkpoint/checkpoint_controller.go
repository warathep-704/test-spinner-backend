package checkpoint

import (
	"net/http"
	"nextzy-spinner-backend/internal/model"
	"nextzy-spinner-backend/internal/service"

	"github.com/gin-gonic/gin"
)

type checkpointCtl struct {
	serv service.CheckpointService
}

func RegisterRouter(
	router *gin.RouterGroup,
	serv service.CheckpointService,
) {
	ctl := checkpointCtl{
		serv: serv,
	}
	router.GET("/user/checkpoints/:user_id", ctl.handleGetUserCheckpoints)
	router.GET("/checkpoints", ctl.handleGetCheckpoints)
	router.POST("/recieve-checkpoint", ctl.handleReceiveCheckpointReward)
}

func (uc *checkpointCtl) handleGetUserCheckpoints(c *gin.Context) {
	userId := c.Param("user_id")

	if userId == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user_id is required"})
		return
	}

	checkpoints, err := uc.serv.GetUserCheckpoint(userId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, checkpoints)
}

func (uc *checkpointCtl) handleGetCheckpoints(c *gin.Context) {

	checkpoints, err := uc.serv.GetCheckpoint()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, checkpoints)
}

func (uc *checkpointCtl) handleReceiveCheckpointReward(c *gin.Context) {
	req := model.ReceiveCheckpointRewardRequest{}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	checkpoints, err := uc.serv.ReceiveCheckpointReward(req.UserId, req.CheckpointId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, checkpoints)
}
