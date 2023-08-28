// declare function myFunction(): void
// declare const myGlobal: i32

export function storeValue(ptr: i32, value: i32): void {
  store<i32>(ptr, value)
}

export function loadValue(ptr: i32): i32 {
  return load<i32>(ptr)
}

export function con(): i32  {
  // myFunction()
  // alert("test")
  // console.log("wasm console:", myGlobal)
  return 32
}