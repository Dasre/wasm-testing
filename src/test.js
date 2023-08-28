import axios from "axios";

async function loadWasm(url) {
  try {
    const response = await axios.get(url, { responseType: "arraybuffer" });
    console.log(response.data);
    const wasmModule = await WebAssembly.compile(response.data);
    console.log(wasmModule);
    return new WebAssembly.Instance(wasmModule);
  } catch (error) {
    console.error("wasm error:", error);
  }
}

async function loadWasmStreaming(url) {
  try {
    const res = await fetch(url);
    const module = await WebAssembly.compileStreaming(res);
    console.log(module);
  } catch (err) {
    if (err instanceof WebAssembly.CompileError) {
      console.log("WebAssembly CompilerError:", err);
    } else if (err instanceof WebAssembly.LinkError) {
      console.log("WebAssembly LinkError:", err);
    } else if (err instanceof WebAssembly.RuntimeError) {
      console.log("WebAssembly Runtim Error:", err);
    } else {
      console.log("Other error:", err);
    }
  }
}

async function loadWasmModule(url) {
  try {
    const response = await axios.get(url, { responseType: "arraybuffer" });
    const module = new WebAssembly.Module(response.data);
    console.log(module);
  } catch (err) {
    console.error("wasm error streaming:", err);
  }
}

async function instant(url) {
  try {
    const arraybuffer = await fetch(url).then((res) => res.arrayBuffer());
    console.log(arraybuffer);
    const result = await WebAssembly.instantiate(arraybuffer);
    console.log(result);
  } catch (err) {
    console.log("wasm instand error:", err);
  }
}

async function instantStreaming(url) {
  try {
    const result = await WebAssembly.instantiateStreaming(fetch(url));
    console.log(result);
  } catch (err) {
    console.log("wasm instantStreaming error:", err);
  }
}

const wasmFileUrl = "../build/ascDebug.wasm";
loadWasm(wasmFileUrl).then((instance) => {
  console.log(instance.exports.con());
});

loadWasmStreaming(wasmFileUrl);
loadWasmModule(wasmFileUrl);
instant(wasmFileUrl);
instantStreaming(wasmFileUrl);
