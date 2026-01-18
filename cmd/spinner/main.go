package main

import (
	"nextzy-spinner-backend/internal/server"
	"os"
)

func main() {
	if len(os.Args) < 2 {
		panic("command required: start")
	}

	switch os.Args[1] {
	case "start":
		server.Start()
	default:
		panic("unknown command")
	}
}
