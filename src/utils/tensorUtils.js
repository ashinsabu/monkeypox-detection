import * as tf from '@tensorflow/tfjs';
// NOT BEING USED RIGHT NOW. MAY BE REQUIRED FOR RESNET
export const imgToTensor = (img, size) => {
    const canvas = document.createElement('canvas');
    canvas.width = size[0];
    canvas.height = size[1];
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, size[0], size[1]);
    const imageData = ctx.getImageData(0, 0, size[0], size[1]);
    const data = new Float32Array(size[0] * size[1] * 3);
    for (let i = 0; i < size[0] * size[1]; ++i) {
      data[i * 3] = imageData.data[i * 4] / 255;
      data[i * 3 + 1] = imageData.data[i * 4 + 1] / 255;
      data[i * 3 + 2] = imageData.data[i * 4 + 2] / 255;
    }
    const tensor = tf.tensor3d(data, [1, size[0], size[1], 3]);
    return tensor;
  };
  