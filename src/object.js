const importObject = {
  index: {
    // 导入一个函数
    myFunction: () => {
      console.log("Function called from WebAssembly");
    },
    // 导入一个全局变量
    myGlobal: 23,
    // 导入一个表
    myTable: new WebAssembly.Table({ initial: 10, element: "anyfunc" }),
  },
};

// 加载 WebAssembly 模块并将 importObject 传递给实例化函数
WebAssembly.instantiateStreaming(fetch("../build/ascDebug.wasm"), importObject)
  .then((instance) => {
    // 调用 WebAssembly 模块内部的函数
    console.log(instance);
    // instance.exports.myWasmFunction();
    console.log(instance.instance.exports.con());
    console.log(instance.instance.exports.myGlobal);
    console.log(instance.instance.exports);
  })
  .catch((err) => {
    if (err instanceof WebAssembly.CompileError) {
      console.log("WebAssembly CompilerError:", err);
    } else if (err instanceof WebAssembly.LinkError) {
      console.log("WebAssembly LinkError:", err);
    } else if (err instanceof WebAssembly.RuntimeError) {
      console.log("WebAssembly Runtim Error:", err);
    } else {
      console.log("Other error:", err);
    }
  });
