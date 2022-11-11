import React, { useState } from "react";

export default function UploadImage() {

    const [file, setFile] = useState("/washing.jpg");

    const changeHandler = (event: any) => {
        setFile(URL.createObjectURL(event.target.files[0]))
    }

    return (
        <div>
            <div className="flex flex-col items-center mb-10">
                <label className="border border-black mb-10">
                    <div
                        style={{
                            backgroundImage: `url(${file})`,
                            width: "380px",
                            height: "380px",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        }} />
                    <input type="file" className="hidden" onChange={changeHandler} />
                </label>
                <div className="flex space-x-4">
                     <button onClick={() => setFile('')} className="px-4 py-2 text-white bg-red-500 rounded shadow-xl">Cannel</button>
                </div>
            </div>
        </div>
    );
}