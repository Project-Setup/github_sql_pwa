const readAsArrayBuffer = (file: Blob): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.readAsArrayBuffer(file);
  });

export default readAsArrayBuffer;
