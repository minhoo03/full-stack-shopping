import React, { useState } from 'react'
import { InputGroup, FormControl, Form, Button } from 'react-bootstrap'
import FileUpload from '../../utils/FileUpload'

export default function UploadProductPage() {

    const [images, setImages] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [continent, setContinent] = useState(1)

    const Continents = [
        { key: 1, value: "Africa" },
        { key: 2, value: "Europe" },
        { key: 3, value: "Asia" },
        { key: 4, value: "North America" },
        { key: 5, value: "South America" },
        { key: 6, value: "Australia" },
        { key: 7, value: "Antarctica" }
    ]

    const titleChangeHandler = (e) => {
        setTitle(e.currentTarget.value)
    }

    const descriptionChangeHandler = (e) => {
        setDescription(e.currentTarget.value)
    }

    const priceChangeHandler = (e) => {
        setPrice(e.currentTarget.value)
    }

    const continentChangeHandler = (e) => {
        setContinent(e.currentTarget.value)
    }

    return (
        <div style={{maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{ textAlign: 'center', marginBottom: '2rem'}}>
                <h2>여행 상품 업로드</h2>
            </div>

            <form>

                <FileUpload />
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
                <select onChange={continentChangeHandler} value={continent}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br />
                <br />
                <Button>
                    확인
                </Button>
            </form>
        </div>
    )
}
