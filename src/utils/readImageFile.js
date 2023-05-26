
export const readImageFile = (file) => {
    // console.log(file)
    return new Promise((resolve) => {
      const reader = new FileReader();
  
      reader.onload = () => resolve(reader.result);
  
      reader.readAsDataURL(file);
    });
  };