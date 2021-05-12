import React, { useState } from 'react'
import { InputGroup, FormControl, Form } from 'react-bootstrap'

export default function UploadProductPage() {

    const [images, setImages] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [continent, setContinent] = useState(1)

    const titleChangeHandler = (e) => {
        setTitle(e.currentTarget.value)
    }

    const descriptionChangeHandler = (e) => {
        setDescription(e.currentTarget.value)
    }

    const priceChangeHandler = (e) => {
        setPrice(e.currentTarget.value)
    }

    return (
        <div style={{maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{ textAlign: 'center', marginBottom: '2rem'}}>
                <h2>여행 상품 업로드</h2>
            </div>

            <form>
                <br />
                <br />
                <label>이름</label>
                <InputGroup className="mb-3">
                    <FormControl value={title} onChange={titleChangeHandler} aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                </InputGroup>
                <br />
                <br />
                <label>설명</label>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control value={description} onChange={descriptionChangeHandler} as="textarea" rows={3} />
                </Form.Group>
                <br />
                <br />
                <label>가격($)</label>
                <InputGroup className="mb-3">
                    <FormControl value={price} onChange={priceChangeHandler} aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                </InputGroup>
                <br />
                <br />
                <select>
                    <option></option>
                </select>
                <br />
                <br />
                <button>
                    확인
                </button>
            </form>
        </div>
    )
}
