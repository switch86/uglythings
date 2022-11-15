import React from "react"
import { UglyContext } from "./UglyContext"
import EditUgly from "./EditUgly"

export default function Ugly(props) {
    const {
        imagesArray, 
        handleDelete,
        editing, 
        editImage, 
        handleEditClick, 
    } = React.useContext(UglyContext)
        
    const imagesHTML = imagesArray.map((image, index) => {
        function handleClickDelete() {
            handleDelete(index)
        }  
        function handleClickEdit(event) {
            if (editing) {
                console.log("please save your previous edit")
            } else {
                handleEditClick(index)
            }
        }
        return (
            <div className="tile"
                key={imagesArray[index]._id }>
                <div className="UglyImage" key={index}>
                    <h1>{image.title}</h1>
                    <img src={image.imgUrl}></img>
                    <p>{image.description}</p>
                </div>
                    {editing && (imagesArray[index]._id === editImage._id) ?
                        <EditUgly 
                            index={index}
                        />   
                        :
                    <div className="ImageButtons">
                        <button onClick={handleClickDelete}>Delete</button>
                        <button onClick={handleClickEdit}>Edit</button>
                    </div>
                    }
            </div>
        )
    })
    return (
        <div className="UglyList">
            {imagesHTML} 
        </div>
    )
}