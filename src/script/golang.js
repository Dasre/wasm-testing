import "../../wasm_exec";
const go = new Go();

async function goInit(url) {
  try {
    const importObject = go.importObject;
    const result = await WebAssembly.instantiateStreaming(
      fetch(url),
      importObject
    );
    go.run(result.instance);
    console.log(result.instance.exports);
    const x = result.instance.exports.add(24, 24);
    console.log(x);
    console.log(result.instance.exports.xxx(24, 24));
  } catch (err) {
    console.log("wasm instantStreaming error:", err);
  }
}

const wasmUrl = "../../build/go.wasm";
goInit(wasmUrl);
