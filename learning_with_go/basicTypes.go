package main

import (
	"fmt"
	"math/cmplx"
)

var (
	ToBe   bool       = false
	MaxInt uint64     = 1<<64 - 1
	z      complex128 = cmplx.Sqrt(-5 + 12i)
)

const (
	// Create a huge number by shifting a 1 bit left 100 places.
	// In other words, the binary number that is 1 followed by 100 zeroes.
	Big = 1 << 100

	// Shift it right again 99 places, so we end up with 1<<1, or 2.
	Small = Big >> 99
)

func needInt(x int) int {
	return x*10 + 1
}

func needFloat(x float64) float64 {
	return x * 0.1
}

func main() {
	// Basic type
	fmt.Printf("Type: %T Value: %v\n", ToBe, ToBe)
	fmt.Printf("Type: %T Value: %v\n", MaxInt, MaxInt)
	fmt.Printf("Type: %T Value: %v\n", z, z)

	// Default Value of data type
	var i int
	var f float64
	var b bool
	var s string
	fmt.Printf("%v %v %v %v\n", i, f, b, s)

	// Type conversions
	newVariable := float64(i)
	fmt.Printf("%f\n", newVariable)

	// Type inference (Short variable declaration)
	x, y := 2, 4
	fmt.Printf("%d %T\n", x, y)

	// f = math.Sqrt(float64(x*x + y*y))
	// fmt.Printf("%f\n", f)

	//Constants declaration
	const fixvariable = "True"
	fmt.Printf("%s\n", fixvariable)

	//Testing purpose
	g := 2
	fmt.Printf("%d \n", g)

	// Numeric Constants
	fmt.Printf("%d Type: %d\n", Small, float64(Big))
	fmt.Printf("%d\n", needInt(Small))
	fmt.Printf("%f\n", needFloat(Small))
	fmt.Printf("%f\n", needFloat(Big))
}
