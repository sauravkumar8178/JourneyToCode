package main

import (
	"fmt"
	"math"
	"math/rand"
)

func sum(x int, y int) int {
	return x + y
}

func multi(x, y, z int) int {
	return x * y * z
}

func swap(x, y string) (string, string) {
	return y, x
}

func nakedStatement(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}

// var c, python, java bool

var i, j int = 1, 2

func main() {
	// Import Package and print it
	fmt.Println("hello world", rand.Intn(112))

	// Import Math Package
	fmt.Printf("Now you have %g problems. \n", math.Sqrt(7))
	fmt.Println(math.Pi)

	// Creating function
	fmt.Println(sum(34, 34))
	fmt.Println(multi(23, 29, 42))

	// Swap two variable
	a, b := swap("Hello", "world")
	fmt.Println(a, b)

	// Naked Return
	fmt.Println(nakedStatement(17))

	// Initialize variable
	// var i int
	// fmt.Println(i, c, python, java)

	//Variable with initializer
	var c, python, java = true, false, "no!"
	fmt.Println(i, j, c, python, java)

	// Short variable declarations
	var p, q int = 1, 3
	k := 3
	fmt.Println(p, q, k)

}
