package spinhistory

import (
	"net/http"
	"nextzy-spinner-backend/internal/model"
	"nextzy-spinner-backend/internal/service"
	"strconv"

	"github.com/gin-gonic/gin"
)

type spinHistoryCtl struct {
	serv service.SpinHistoryService
}

func RegisterRouter(
	router *gin.RouterGroup,
	serv service.SpinHistoryService,
) {
	ctl := spinHistoryCtl{
		serv: serv,
	}
	router.GET("/user/spin-history/:user_id/:page", ctl.handleGetUserSpinHistory)
	router.GET("/spin-history/:page", ctl.handleGetAllSpinHistory)
	router.POST("/spin", ctl.HandleUserSpin)
}

func (usc *spinHistoryCtl) handleGetUserSpinHistory(c *gin.Context) {
	userId := c.Param("user_id")
	page := c.Param("page")

	pageInt := 1
	if page != "" {
		var err error
		pageInt, err = strconv.Atoi(page)
		if err != nil || pageInt < 1 {
			c.JSON(http.StatusBadRequest, gin.H{"error": "invalid page number"})
			return
		}
	}

	if userId == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user_id is required"})
		return
	}

	spinHistory, total, err := usc.serv.GetUserSpinHistory(userId, pageInt)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	spinHistoryResponse := model.SpinHistoriesResponse{
		SpinHistories: spinHistory,
		Total:         total,
	}

	c.JSON(http.StatusOK, spinHistoryResponse)
}

func (usc *spinHistoryCtl) handleGetAllSpinHistory(c *gin.Context) {

	page := c.Param("page")

	pageInt := 1
	if page != "" {
		var err error
		pageInt, err = strconv.Atoi(page)
		if err != nil || pageInt < 1 {
			c.JSON(http.StatusBadRequest, gin.H{"error": "invalid page number"})
			return
		}
	}

	spinHistory, total, err := usc.serv.GetAllSpinHistory(pageInt)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	spinHistoryResponse := model.SpinHistoriesResponse{
		SpinHistories: spinHistory,
		Total:         total,
	}

	c.JSON(http.StatusOK, spinHistoryResponse)
}

func (usc *spinHistoryCtl) HandleUserSpin(c *gin.Context) {
	req := model.UserSpinRequest{}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	userSpin, err := usc.serv.UserSpin(req.UserId, req.Point)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, userSpin)

}
