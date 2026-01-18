package database

import (
	"log"
	"sync"

	"nextzy-spinner-backend/prisma/db"
)

var (
	client *db.PrismaClient
	once   sync.Once
)

func Connect() *db.PrismaClient {
	once.Do(func() {
		client = db.NewClient()

		if err := client.Connect(); err != nil {
			log.Fatalf("************ Prisma connect failed: %v", err)
		}

		log.Println("")
		log.Println("============== DB connected ==============")
		log.Println("")
		log.Println("")
		log.Println("")
		log.Println("============== DB connected ==============")
		log.Println("")

	})

	return client
}

func Disconnect() {
	if client != nil {
		_ = client.Disconnect()
		log.Println("============== Prisma disconnected ==============")
	}
}
