import React from 'react'
import Dropzone from 'react-dropzone'
import { AiOutlinePlus } from 'react-icons/ai'

export default function FileUpload() {
    return (
        <div style={{ display: "flex", justifyContent: "space-between"}}>
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
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
