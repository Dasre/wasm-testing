package main

// tinygo build -o ./build/go.wasm -target wasm main.go

func main() {}

//export add
func add(x int, y int) int {
  return x + y;
}
//export xxx
func subtract(x int, y int) int {
	return x - y;
}