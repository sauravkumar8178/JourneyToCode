package main

import (
	"fmt"
	"math"
	"runtime"
	"time"
)

func sqrt(x float64) string {
	if x < 0 {
		return sqrt(-x) + "i"
	}
	return fmt.Sprint(math.Sqrt(x))
}

func pow(x, n, lim float64) float64 {
	if v := math.Pow(x, n); v < lim {
		return v
	} else {
		fmt.Printf("%g >= %g\n", v, lim)
	}
	return lim
}

func main() {

	//For loop statement
	// sum := 0
	// for i := 0; i < 10; i++ {
	// 	sum += 1
	// }
	// fmt.Printf("%d\n", sum)

	//Another to using for loop
	sum := 1
	for sum < 1000 {
		sum += sum
	}
	fmt.Printf("%d\n", sum)

	// If statement
	fmt.Printf("%s %s\n", sqrt(2), sqrt(-4))
	fmt.Println(
		pow(3, 2, 10),
		pow(3, 3, 20),
	)

	// Switch Statement
	fmt.Print("Go run on ")
	switch os := runtime.GOOS; os {
	case "darwin":
		fmt.Println("OS X.")
	case "linux":
		fmt.Println("Linux")
	default:
		fmt.Printf("%s.\n", os)
	}

	//Switch evaluation order
	fmt.Println("When's Satuurday")
	today := time.Now().Weekday()
	switch time.Saturday {
	case today + 0:
		fmt.Println("Today")
	case today + 1:
		fmt.Println("Tommorrow")
	case today + 2:
		fmt.Println("In two days")
	default:
		fmt.Println("Too far away.")
	}

	// Time Checker
	defer fmt.Println("I am defer") // defer function
	t := time.Now().Hour()
	switch {
	case t < 12:
		fmt.Println("Good morning")
	case t < 17:
		fmt.Println("Good afternoon")
	default:
		fmt.Println("Good evening")
	}

	// Stacking defers --> Deferred function calls are pushed onto a stack. When a function returns, its deferred calls are executed in last-in-first-out order.
	fmt.Println("Counting")
	for k := 0; k < 10; k++ {
		defer fmt.Println(k)
	}
	fmt.Println("done")
}
