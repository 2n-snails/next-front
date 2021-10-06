import Compressor from "compressorjs";

// fileList 타입의 배열을 array 타입으로 변경함.
export async function fileListToArray(list: FileList) {
  console.log(list, "list");
  const array = [];
  for (let i = 0; i < list.length; i += 1) {
    // eslint-disable-next-line no-new
    new Compressor(list[i], {
      quality: 0.9,

      success(result) {
        array.push(result);
      },
      error(err) {
        console.log(err.message);
      },
    });
  }
  console.log(array.length);
  return array;
}

export async function FileToBase64(file: File | Blob): Promise<any> {
  const reader = new FileReader();
  let base64DataURL;

  reader.onload = (e) => {
    base64DataURL = e.target.result;
  };

  reader.readAsDataURL(file);
  return base64DataURL;
}
