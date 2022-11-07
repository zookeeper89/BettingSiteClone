import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { formList } from "@mantine/form";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import {
  IoArrowBack,
  IoArrowDown,
  IoArrowForward,
  IoArrowUp,
  IoClose,
} from "react-icons/io5";

export default function MultiplePhotoUploader({
  form,
  formimages,
  imagesName,
  setLoading: setLoadingParent,
}) {
  const [loading, setLoading] = useState(false);

  const information = {
    upload_preset: "k8lgtiao",
    cloud_name: "dlrpl3dtg",
  };

  const onDrop2 = async (files) => {
    setLoading(true);
    setLoadingParent(true);

    const uploadedFilenames = [];

    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", information.upload_preset);
        const { data } = await axios.post(
          "https://api.cloudinary.com/v1_1/" +
            information.cloud_name +
            "/image/upload",
          formData
        );

        const fileName = data.public_id + "." + data.format;
        uploadedFilenames.push(fileName);

        // For some reason this doesn't work... form.addListItem overwrites the previous added element
        // form.addListItem("photoFilenames", fileName);
      }

      // Manually add all newly added "uploadedFilenames" via form.setFieldValue, instead of in the above loop with form.addListItem which would've been easier, but doesn't work.
      form.setFieldValue(
        imagesName,
        [...formimages, ...uploadedFilenames]
      );

      setLoading(false);
      setLoadingParent(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setLoadingParent(false);
    }
  };

  const handleDelete = async (image, index) => {
    form.removeListItem(imagesName, index);
    // Possible todo: Also remove the photo from the server
  };

  const moveForward = (index) => {
    form.reorderListItem(imagesName, {
      from: index,
      to: index + 1,
    });
  };

  const moveBackward = (index) => {
    form.reorderListItem(imagesName, {
      from: index,
      to: index - 1,
    });
  };

  return (
    <div className="">
      <Dropzone
        loading={loading}
        onDrop={onDrop2}
        onReject={(files) => console.log("rejected files", files)}
        maxSize={31457280} // Max 30 MB. Byte conversion: http://byteconvert.org/
        accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.webp]}
        multiple
      >
        {(status) => (
          <div className="pointer-events-none p-2 text-center text-sm">
            <p className="font-bold text-gray-600">
              Træk eller klik for at tilføje et foto
            </p>
            <div className="mt-1 text-gray-400">
              <p>.jpg, .png eller .webp. Max 30 MB.</p>
            </div>
          </div>
        )}
      </Dropzone>
      <div className="-m-3 mt-3 flex flex-wrap">
        {formimages?.map((image, index) => (
          <div key={image} className="w-full p-3 md:w-1/4">
            <div className="relative flex bg-gray-100">
              {/* Loader always running in the backgroud */}
              {/* <Loader className="absolute inset-0 m-auto" size="lg" /> */}
              <div className="h-[200px]">
                <Image
                  src={`https://res.cloudinary.com/${information.cloud_name}/image/upload/ar_4:3,c_fill/c_scale,w_300/q_auto:eco/f_auto/${image}`}
                  alt=""
                  layout="fill"
                  className="select-none rounded-md object-cover"
                />
              </div>
              <div className="absolute inset-0 z-[1] flex">
                <div className="absolute my-auto flex flex-col p-1.5">
                  {index !== formimages.length - 1 && (
                    <IoArrowForward
                      className="mb-1.5 hidden cursor-pointer rounded-full bg-white p-1.5 text-black shadow-sm md:block"
                      size={32}
                      onClick={() => moveForward(index)}
                    />
                  )}
                  {index !== 0 && (
                    <IoArrowUp
                      className="mb-1.5 cursor-pointer rounded-full bg-white p-1.5 text-black shadow-sm md:hidden"
                      size={32}
                      onClick={() => moveBackward(index)}
                    />
                  )}
                  {index !== formimages.length - 1 && (
                    <IoArrowDown
                      className="cursor-pointer rounded-full bg-white p-1.5 text-black shadow-sm md:hidden"
                      size={32}
                      onClick={() => moveForward(index)}
                    />
                  )}
                  {index !== 0 && (
                    <IoArrowBack
                      className="hidden cursor-pointer rounded-full bg-white p-1.5 text-black shadow-sm md:block"
                      size={32}
                      onClick={() => moveBackward(index)}
                    />
                  )}
                </div>
                <div className="absolute top-1.5 right-1.5">
                  <IoClose
                    className="cursor-pointer rounded-full border border-red bg-red-500 p-1.5 text-white shadow"
                    size={32}
                    onClick={() => handleDelete(image, index)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
