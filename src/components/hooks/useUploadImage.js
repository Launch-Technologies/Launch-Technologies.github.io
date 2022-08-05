import { useState } from 'react';

export default function useUploadImage() {
  const [image, setImage] = useState({ file: null, url: null });

  function onImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      let imgUrl = URL.createObjectURL(img);
      setImage({
        file: img,
        url: imgUrl,
      });
    }
  }

  return [image, onImageChange];
}
