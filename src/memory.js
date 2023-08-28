const wasmFileUrl = "../build/ascDebug.wasm";

const memorys = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});

async function memory(url) {
  try {
    const { module, instance } = await WebAssembly.instantiateStreaming(
      fetch(url),
      {
        js: { mem: memorys },
      }
    );
    console.log(instance);
    console.log(instance.exports.memory.grow(1));
    console.log(instance.exports.storeValue(0, 32));
    console.log(instance.exports.loadValue(0));
  } catch (err) {
    console.error("err:", err);
  }
}

memory(wasmFileUrl);
