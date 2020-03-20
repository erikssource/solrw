export async function loadWasm() {
    const wasm = await import ('solgame');
    const newSolGame = wasm.Solgame.new();
    return {wasm: wasm, solGame: newSolGame};
}
