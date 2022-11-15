import React from "react"
import axios from "axios"

    const UglyContext = React.createContext()

    function UglyContextProvider(props) {
        const [imagesArray, setImagesArray] = React.useState([])
        const [newImage, setNewImage] = React.useState({
            title: "Title here",
            description: "Description here",
            imgUrl: "http://www.example.com/some-link-to-a-cool-photo.jpg"
        })
        const [editImage, setEditImage] = React.useState({
            title: "Title here",
            description: "Description here",
            imgUrl: "http://www.example.com/some-link-to-a-cool-photo.jpg"
        })
        const [editing, setEditing] = React.useState(false)

        React.useEffect(() => {
            axios.get("https://api.vschool.io/berloven/thing")
              .then(res => res.data.reverse())
              .then(res => {
                setImagesArray(res)
              })
              .catch(error => console.log(error))
          }, [])
        
          function handleSubmit(event) {
            // console.log(newImage)
            axios.post("https://api.vschool.io/berloven/thing/", newImage)          
            .then(res => res)
                .catch(error => console.log(error)) 
        }
        function handleChange(event) {
            const {name, value} = event.target
            setNewImage(prevImage => ({
                ...prevImage,
                [name]: value
            }))
            // console.log(newImage)
        }
        function handleDelete(index) {
            let id = imagesArray[index]._id
            axios.delete(`https://api.vschool.io/berloven/thing/${id}`)
                .then(() => {window.location.reload(false)})
                .catch(error => console.log(error))
        }
        function handleEditClick(index) {
            setEditImage(imagesArray[index])
            setEditing(true)
        }

        function handleEditChange(event, index) {
            const {name, value} = event.target
            setEditImage(prevImage => ({
                ...prevImage,
                [name]: value
            }))
            console.log(editImage)
        }
            
        function handleEditSubmit(index) {
            let id = editImage._id
            axios.put(`https://api.vschool.io/berloven/thing/${id}`, editImage)
                .then(() => {window.location.reload(false)})
                .catch(error => console.log(error))
            setEditing(false)
        }
        
          return (
            <>
              <UglyContext.Provider value={{
                  imagesArray: imagesArray,
                  newImage: newImage,
                  editing: editing,
                  editImage: editImage,
                  handleSubmit: handleSubmit,
                  handleChange: handleChange,
                  handleDelete: handleDelete,
                  handleEditClick: handleEditClick,
                  handleEditChange: handleEditChange,
                  handleEditSubmit: handleEditSubmit
                }}>
                    {props.children}
                </UglyContext.Provider>
            
            </>
    )
}
    

export { UglyContext, UglyContextProvider } 