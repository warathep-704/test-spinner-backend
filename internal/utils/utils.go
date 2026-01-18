package utils

import (
	"math/rand"
	"time"
)

var firstChars = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_")
var otherChars = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_")

func CreateIdentifier(length int) string {
	if length <= 0 {
		return ""
	}

	rand.Seed(time.Now().UnixNano())

	id := make([]rune, length)

	id[0] = firstChars[rand.Intn(len(firstChars))]

	for i := 1; i < length; i++ {
		id[i] = otherChars[rand.Intn(len(otherChars))]
	}

	return string(id)
}
