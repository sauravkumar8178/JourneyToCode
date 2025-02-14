package main

import (
	"fmt"
)

func main() {
	a, b := 2, 3
	p, q := &a, &b
	fmt.Println(*p, *q)

	a = &b
	fmt.Println(a)

}
