package model

type UserRequestModel struct {
	UserName string `json:"user_name" binding:"required"`
}
