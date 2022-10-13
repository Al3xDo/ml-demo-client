import React, { useState } from "react";
import uploadIco from "./asset/upload.png"

const Uploader = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="row">
            <div
                className="col-12 mt-5 mr-1 pt-5 pb-5 border border-5"
                style={{ borderColor: "#9e9e9e" }}
            >
                {selectedImage ? (
                    <img src={URL.createObjectURL(selectedImage)} alt="mock" width="100%" />
                ) : (
                    <img src={uploadIco} alt="mock" width={100} />
                )}
            </div>
            <div className="col-12 mt-2">
                <input
                    type="file"
                    name="myImage"
                    class="form-control"
                    onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                    }}
                />


            </div>
            <div className="col-12 mt-2">
                <button type="button" class="btn btn-primary">Gửi ảnh</button>
            </div>

        </div>
    );
};

export default Uploader;