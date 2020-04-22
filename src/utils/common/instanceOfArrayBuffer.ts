const hasArrayBuffer = typeof ArrayBuffer === 'function';

const instanceOfArrayBuffer = (value: any): value is ArrayBuffer =>
  hasArrayBuffer &&
  (value instanceof ArrayBuffer ||
    Object.prototype.toString.call(value) === '[object ArrayBuffer]');

export default instanceOfArrayBuffer;
