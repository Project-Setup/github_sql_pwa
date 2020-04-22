const hasArrayBuffer = typeof ArrayBuffer === 'function';

export interface TypedArray {
  buffer: ArrayBuffer;
  BYTES_PER_ELEMENT: number;
}

const instanceOfTypedArray = (value: any): value is TypedArray =>
  hasArrayBuffer &&
  !!(value.buffer instanceof ArrayBuffer && value.BYTES_PER_ELEMENT);

export default instanceOfTypedArray;
