import React from 'react'
import Col from 'react-bootstrap/Col'
import useStyles from './CatalogItem-styles'

export default function CatalogItem({ name, description, category, image }) {
    const classes = useStyles()

    const styles = {
        category: {
            backgroundColor: (category === 'Oficina') ? (
                '#87c6be'
            ) : (category === 'Papelería') ? (
                '#ff8c95'
            ) : (category === 'informatica') ? (
                '#ffcea0'
            ) : (category === 'Limpieza') ? (
                '#638a96'
            ) : (category === 'Cafetería') ? (
                '#6566e2'
            ) : (
                '#63aaff'
            )
        }
    }

    return (
        <Col xs={12} sm={6} lg={4} xl={3} className="d-flex justify-content-center">
            <div className={classes.root}>
                <div className={classes.header}>
                    <h6>H&#38;R</h6>
                </div>
                <img src={`http://localhost:3000/${image}`} alt={image} className={classes.img} />
                <div className={classes.body}>
                    <h5 className={classes.name}>{name}</h5>
                    <p className={classes.description}>{description}</p>
                    <a href="gvg" className={classes.link}>
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
                <div className={classes.category}>
                    <h6>Categoría</h6>
                    <p>{category}</p>
                    <div className={classes.categoryIcon} style={styles.category}>
                        <i className="fas fa-boxes"></i>
                    </div>
                </div>
            </div>
        </Col>
    )
}