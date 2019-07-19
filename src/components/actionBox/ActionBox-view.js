import React from 'react'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import useStyles from './ActionBox-styles'

export default function ActionBox({ data, filter }) {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Container fluid={true} className={classes.root}>
                <div className={classes.searchBox}>
                    <p className={classes.title}>Busca los artticulos por nombre</p>
                    <InputGroup className={classes.inputBox}>
                        <FormControl className={classes.input} />
                        <InputGroup.Append>
                            <InputGroup.Text className={classes.icon}><i className="fas fa-search"></i></InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </Container>
            <Container className={classes.searchBox}>
                {/* <h2 className="h1 mt-5 mb-2">
                    Categorías
                </h2> */}
                {/* <div className="w-100 d-flex justify-content-center align-items-center">
                    <Button className="d-inline" variant="link"></Button>
                    <Button className="d-inline" variant="link"></Button>
                    <Button className="d-inline" variant="link"></Button>
                    <Button className="d-inline" variant="link"></Button>
                    <Button className="d-inline" variant="link"></Button>
                    <Button className="d-inline" variant="link"></Button>
                </div> */}
                <p className="text-left mt-5 w-100">
                    {data.length} {' resultados'}
                </p>
            </Container>
        </React.Fragment>
    )
}