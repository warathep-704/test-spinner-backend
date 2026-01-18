package server

import (
	"nextzy-spinner-backend/internal/database"

	"github.com/gin-gonic/gin"
)

func Start() {
	r := gin.Default()

	db := database.Connect()
	defer database.Disconnect()

	RegisterRoutes(r, db)

	r.Run(":8080")
}
