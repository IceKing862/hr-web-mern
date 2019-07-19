import React from 'react'
import Container from 'react-bootstrap/Container'

export default function Map() {
    return (
        <Container fluid={true} style={{ margin: '66px 0 3rem 0' }}>
            <div className="embed-responsive embed-responsive-16by9" style={{ height: '100vh' }}>
                <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.626718696918!2d-89.27652138525889!3d13.680447502629011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f632f546b620f5b%3A0x56170f2cfcfcf6e5!2sH%26R+Papelera%2C+Suministros+y+Servicios+S.A+de+C.V.!5e0!3m2!1ses-419!2ssv!4v1554139412549!5m2!1ses-419!2ssv" width="100%" height="600" frameBorder="0" style={{border: "0"}} title="map" allowFullScreen></iframe>
            </div>
        </Container>
    )
}