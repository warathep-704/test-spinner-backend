package user

import (
	"net/http"
	"nextzy-spinner-backend/internal/model"
	"nextzy-spinner-backend/internal/service"

	"github.com/gin-gonic/gin"
)

type userCtl struct {
	serv service.UserService
}

func RegisterRouter(
	router *gin.RouterGroup,
	serv service.UserService,
) {
	ctl := userCtl{
		serv: serv,
	}
	router.POST("/user", ctl.handleCreateUser)
	router.GET("/user/:user_name", ctl.handleGetUser)
	router.GET("/user/exist/:user_name", ctl.handleCheckExistingUser)
}

func (u *userCtl) handleCreateUser(c *gin.Context) {

	req := model.UserRequestModel{}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user, err := u.serv.CreateUser(req.UserName)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, user)
}

func (u *userCtl) handleCheckExistingUser(c *gin.Context) {

	userName := c.Param("user_name")

	isExist, err := u.serv.CheckExsitingUser(userName)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	obj := map[string]any{}

	obj["isExist"] = isExist

	c.JSON(http.StatusOK, obj)
}

func (u *userCtl) handleGetUser(c *gin.Context) {

	userName := c.Param("user_name")

	if userName == "" {
		c.JSON(http.StatusBadRequest, "user_name is required")
		return
	}

	user, err := u.serv.GetUser(userName)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	if user == nil {
		c.JSON(http.StatusNotFound, "User not found")
		return
	}

	c.JSON(http.StatusOK, user)
}
