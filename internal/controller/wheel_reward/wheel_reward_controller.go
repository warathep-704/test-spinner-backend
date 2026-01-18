package wheelreward

import (
	"net/http"
	"nextzy-spinner-backend/internal/service"

	"github.com/gin-gonic/gin"
)

type userCtl struct {
	serv service.WheelRewardService
}

func RegisterRouter(
	router *gin.RouterGroup,
	serv service.WheelRewardService,
) {
	ctl := userCtl{
		serv: serv,
	}
	router.GET("/wheel-reward", ctl.handleGetWheelRewards)
}

func (u *userCtl) handleGetWheelRewards(c *gin.Context) {

	user, err := u.serv.GetWheelRewards()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, user)
}
