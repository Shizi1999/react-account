import { useState } from 'react';
import axiosClient from '../../api/axiosClient';

const Home: React.FC = () => {
  // const [files, setFiles] = useState<Blob[]>([]);
  // const hanldeChangeFile = ({ currentTarget: { files } }: React.ChangeEvent<HTMLInputElement>) => {
  //   if (files && files.length) {
  //     setFiles((existing) => existing.concat(Array.from(files)));
  //   }
  // };

  // const uploadImage = () => {
  //   const formData = new FormData();
  //   console.log(files);
  //   files.forEach((file) => formData.append('image', file));
  //   axiosClient
  //     .post('/test', formData, {
  //       headers: {
  //         'content-type': 'multipart/form-data',
  //       },
  //     })
  //     .then((res) => console.log(res));
  // };

  // const removeImage = (index: number) => {
  //   setFiles((prev) => prev.filter((item, i) => index !== i));
  // };

  return (
    <div className="flex items-center justify-center h-full text-blue-700 font-medium text-2xl">
      Start With React Login OAuth2
      {/* <input type="file" multiple onChange={hanldeChangeFile} />
      <div className="">
        {files.length > 0 &&
          files.map((file, index) => {
            return (
              <div
                onClick={() => {
                  removeImage(index);
                }}
                key={index}
              >
                {URL.createObjectURL(file)}
              </div>
            );
          })}
      </div> */}
      {/* <button onClick={uploadImage}>Upload</button> */}
    </div>
  );
};

export default Home;
