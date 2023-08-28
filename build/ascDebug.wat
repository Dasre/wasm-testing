(module
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $none_=>_i32 (func (result i32)))
 (global $~lib/memory/__data_end i32 (i32.const 8))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 32776))
 (global $~lib/memory/__heap_base i32 (i32.const 32776))
 (memory $0 0)
 (table $0 1 1 funcref)
 (elem $0 (i32.const 1))
 (export "storeValue" (func $assembly/index/storeValue))
 (export "loadValue" (func $assembly/index/loadValue))
 (export "con" (func $assembly/index/con))
 (export "memory" (memory $0))
 (func $assembly/index/storeValue (param $ptr i32) (param $value i32)
  local.get $ptr
  local.get $value
  i32.store $0
 )
 (func $assembly/index/loadValue (param $ptr i32) (result i32)
  local.get $ptr
  i32.load $0
  return
 )
 (func $assembly/index/con (result i32)
  i32.const 32
  return
 )
)
