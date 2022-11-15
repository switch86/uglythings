import React from "react"
import { UglyContext } from "./UglyContext"
import "../assets/Edit.css"

export default function EditUgly(props) {
    const { 
        editImage,  
        handleEditChange, 
        handleEditSubmit, 
        } = React.useContext(UglyContext)
    
        function handleChangeEdit(event) {
            handleEditChange(event, props.index)
        }
        function handleSubmitEdit(event) {
            event.preventDefault()
            handleEditSubmit(event, props.index)
        }
    return(
    <form className="editForm">
        <label htmlFor='imgUrl'>Image Url: </label>
        <input type="text" name="imgUrl" onChange={handleChangeEdit} value={editImage.imgUrl}></input>
        <label htmlFor='title'>Title: </label>
        <input type="text" name="title" onChange={handleChangeEdit} value={editImage.title}></input>
        <label htmlFor='description' >Description: </label>
        <input type="textbox" name="description" onChange={handleChangeEdit} value={editImage.description}></input>
        <button onClick={handleSubmitEdit}>Submit</button>
    </form>   
    )
}