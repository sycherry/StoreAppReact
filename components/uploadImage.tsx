import React, { useState } from "react";
import { UploadImageProps } from "./UploadImageProps";

export default function UploadImage( { photo } : UploadImageProps) {

    const [uploadPhoto, setUploadPhoto] = useState<string>(photo);
    const changeHandler = (event: any) => {
        setUploadPhoto(URL.createObjectURL(event.target.files[0]))
    }

    return (
        <div>
            <div className="flex flex-col items-center mb-10">     
                    <label className="border border-black mb-10 cursor-pointer">
                    {uploadPhoto ?
                        <div 
                            
                            style={{
                                backgroundImage: `url(${uploadPhoto})`,
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
                        <input type="file" className="hidden" onChange={changeHandler} />
                    </label>
                {uploadPhoto &&
                <div className="flex space-x-4">
                    <button onClick={() => setUploadPhoto('')}
                        className="px-4 py-2 text-white bg-red-500 rounded shadow-xl">
                        Delete image</button>
                </div>
                }
            </div>
        </div>
    );
}