/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * assembly/index/storeValue
 * @param ptr `i32`
 * @param value `i32`
 */
export declare function storeValue(ptr: number, value: number): void;
/**
 * assembly/index/loadValue
 * @param ptr `i32`
 * @returns `i32`
 */
export declare function loadValue(ptr: number): number;
/**
 * assembly/index/con
 * @returns `i32`
 */
export declare function con(): number;
