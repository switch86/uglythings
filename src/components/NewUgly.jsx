import React from "react"
import { UglyContext } from "./UglyContext"

export default function NewUgly() {
    const {handleChange, handleSubmit, newImage} = React.useContext(UglyContext)

    return (
    <form className="NewUgly">
        <label htmlFor='title'>Name for the Picture: </label>
        <input className="title" type="text" name="title" onChange={handleChange} value={newImage.title.value}></input>
        <label htmlFor='description' >Describe the image: </label>
        <input className="description" type="textbox" name="description" onChange={handleChange} value={newImage.title.value}></input>
        <label htmlFor='imgUrl'>Image Url: </label>
        <input className="imgUrl" type="text" name="imgUrl" onChange={handleChange} value={newImage.imgUrl.value}></input>
        <button onClick={handleSubmit}>Submit</button>
    </form>
    )
}