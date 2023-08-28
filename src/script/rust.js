import init from "../../pkg/v";

async function rustWasm(url) {
  const h = await init(url);
  console.log(h);
  console.log(h.add(2, 4));
}

async function rustWasmWithOutJS(url) {
  const h = await WebAssembly.instantiateStreaming(fetch(url));
  console.log(h.instance.exports.add(2, 4));
}

const wasmUrl = "../../pkg/v_bg.wasm";
rustWasm(wasmUrl);
rustWasmWithOutJS(wasmUrl);
