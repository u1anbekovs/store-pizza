import React, {useState, ChangeEvent} from "react";
import style from "./Create.module.scss"

function Create() {
    const [file, setFile] = useState();

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
            console.log(e.target.files[0])
            const selectedFile = e.target.files[0];
            setFile(URL.createObjectURL(selectedFile));
        }
    }

    return (
        <div className={style.create}>
            <h2>CREATE PRODUCT</h2>
            <div className={style.input}>
                <div className={style.image}>
                    <input type="file" aria-description="" onChange={handleChange}/>
                    <input type="text" placeholder="food name"/>
                    <input type="number" placeholder="price"/>
                </div>
                <div className={style.image}>
                    <img src={file} alt="Place for a photo"/>
                </div>
            </div>
            <button>Create</button>
        </div>
    );
}

export default Create;