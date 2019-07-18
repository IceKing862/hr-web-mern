import React from 'react'
import Banner from './../../components/banner'
import Catalog from './../../components/catalog'

export default () => {
    return(
        <React.Fragment>
            <Banner image="url('./static/media/slide3.jpg')">
            </Banner>
            <Catalog />
        </React.Fragment>
    )
}