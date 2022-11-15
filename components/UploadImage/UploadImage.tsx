import React from "react";
import { UploadImageProps } from "./UploadImage.props";

export default function UploadImage({ photo, setFieldValue }: UploadImageProps) {

    const inputPhotoChange = (e: any) => {
        setFieldValue("photo", URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div>
            <div className="flex flex-col items-center mb-10">
                <label className="border border-black mb-10 cursor-pointer">
                    {photo ?
                        <div
                            style={{
                                backgroundImage: `url(${photo})`,
                                width: "380px",
                                height: "380px",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }} />
                        :
                        <div
                            style={{
                                backgroundImage: `url(/upload.jpg)`,
                                width: "380px",
                                height: "380px",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }} />
                    }
                    <input type="file" className="hidden" onChange={(e) => inputPhotoChange(e)} />
                </label>
                {photo &&
                    <div className="flex space-x-4">
                        <button onClick={() => setFieldValue("photo", '')}
                            className="px-4 py-2 text-white bg-red-500 rounded shadow-xl">
                            Delete image</button>
                    </div>
                }
            </div>
        </div>
    );
};