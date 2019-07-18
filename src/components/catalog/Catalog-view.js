import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Media from './../mediaControlCard'
import { read } from './../../util/actions/actions'

export default function Catalog() {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                read().then(result => {
                    resolve(
                        setData(result)
                    )
                })
            }, 1000)
        })
    }

    return (
        <Container>
            <Row className="py-5 my-5">
                {data.map((item, index) =>
                    <Col 
                        key={index} xs={12} md={6} lg={4}
                        className="d-flex justify-content-center align-items-between my-3"
                    >
                        <Media {...item} />
                    </Col>
                )}
            </Row>
        </Container>
    )
}