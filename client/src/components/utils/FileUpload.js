import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { AiOutlinePlus } from 'react-icons/ai'
import axios from 'axios'
import { Form } from 'react-bootstrap'

export default function FileUpload() {

    const [images, setImages] = useState([])

    const dropHandler = (files) => {

        let formData = new FormData() // form으로 부터 받은 data.append

        const config = {
            header: {'content-type': 'multipart/form-data'} // backend에 content-type을 미리 알림
        }
        formData.append("file", files[0])

        axios.post('/api/product/image', formData, config)
        .then(response => {
            if(response.data.success) {
                setImages([...images, response.data.filePath])
            } else {
                alert('파일을 저장하는데 실패했습니다.')
            }
        })

    }

    const deleteHandler = (image) => {
        const currentIndex = images.indexOf(image) // images 배열의 image(index)를 반환

        let newImages = [...images]
        newImages.splice(currentIndex, 1) // 배열 currentIndex 자리부터 1개를 지운다.

        setImages(newImages)
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-between"}}>
            <Dropzone onDrop={dropHandler}>
                {({getRootProps, getInputProps}) => (
                    <section>
                    <div
                    style={{ width: 300, height: 240, border: "1px solid lightgray",
                             display: "flex", justifyContent: "center", alignItems: "center"}}
                    {...getRootProps()}>
                        <input {...getInputProps()} />
                        <AiOutlinePlus style={{ fontSize : "3rem" }} />
                    </div>
                    </section>
                )}
            </Dropzone>

            <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll'}}>
                    {images.map((image, index) => (
                        <div key={index} onClick={() => deleteHandler(image)}>
                            <img style={{ minWidth: '300px', width: '300px', height: '240px'}} 
                            src={`http://localhost:5000/${image}`} />
                        </div>
                    ))}
            </div>

        </div>
    )
}
