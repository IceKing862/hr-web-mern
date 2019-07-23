import React from 'react'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import useStyles from './ActionBox-styles'

export default function ActionBox() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Container fluid={true} className={classes.root}>
                <div className={classes.searchBox}>
                    <p className={classes.title}>Busca los articulos por nombre</p>
                    <InputGroup className={classes.inputBox}>
                        <FormControl className={classes.input} />
                        <InputGroup.Append>
                            <InputGroup.Text className={classes.icon}><i className="fas fa-search"></i></InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <div className="px-sm-5 mx-4">
                    8 resultados
                </div>
            </Container>
        </React.Fragment>
    )
}