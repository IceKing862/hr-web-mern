import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CircularProgress from '@material-ui/core/CircularProgress'
import { read } from './../../util/actions/actions'
import CatalogItem from './../catalogItem'
import ActionBox from './../actionBox'

export default function Catalog() {
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        setLoading(true)
        getData()
    }, [])

    const getData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                read().then(result => {
                    resolve(
                        setData(result),
                        setLoading(false)
                    )
                })
            }, 1000)
        })
    }

    return (
        <React.Fragment>
            <ActionBox data={data}  ></ActionBox>
            {loading ? (
                <div className="w-100 d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                    <CircularProgress />
                </div>
            ) : (
                <Container>
                    <Row className="pb-5 mb-5">
                        {data.map((item, index) =>
                            <CatalogItem key={index} {...item} />
                        )}
                    </Row>
                </Container>
            )}
        </React.Fragment>
    )
}