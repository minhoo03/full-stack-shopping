import React from 'react'
import Dropzone from 'react-dropzone'
import { AiOutlinePlus } from 'react-icons/ai'
import axios from 'axios'
import { Form } from 'react-bootstrap'

export default function FileUpload() {

    const dropHandler = (files) => {

        let formData = new FormData() // form으로 부터 받은 data.append

        const config = {
            header: {'content-type': 'multipart/fomr-data'} // backend에 content-type을 미리 알림
        }
        formData.append("file", files[0])

        axios.post('/api/product/image', formData, config)
        .then(response => {
            if(response.data.success) {

            } else {
                alert('파일을 저장하는데 실패했습니다.')
            }
        })

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
        </div>
    )
}
