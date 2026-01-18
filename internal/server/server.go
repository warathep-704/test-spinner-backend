package server

import (
	"nextzy-spinner-backend/internal/database"
	"os"
	"strings"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func Start() {
	godotenv.Load()
	ginApp := gin.New()

	db := database.Connect()
	defer database.Disconnect()

	RegisterRoutes(ginApp, db)

	originsEnv := os.Getenv("SERVER_CORS_ALLOW_ORIGIN")
	ServerCorsAllowOrigin := strings.Split(originsEnv, ",")

	ginApp.RemoveExtraSlash = true
	ginApp.Use(gin.Recovery())
	ginApp.Use(gin.Logger())
	ginApp.Use(cors.New(cors.Config{
		AllowOriginFunc: func(origin string) bool {
			for _, allowed := range ServerCorsAllowOrigin {
				if allowed == "*" || allowed == origin {
					return true
				}
			}
			return false
		},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	ginApp.Run(":" + port)
}
