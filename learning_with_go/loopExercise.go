package main

import (
	"fmt"
	"math"
)

func Sqrt(x float64) float64 {
	z := 1
	for math.Sqrt(float64(z)) < math.Sqrt(x) {
		z += 1
	}
	return float64(z)
}

func main() {
	fmt.Println(Sqrt(2))
}
