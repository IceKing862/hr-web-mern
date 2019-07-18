import React from 'react'
import Banner from './../../components/banner'
import DobleColumn from './../../components/dobleColumn'

const data = [
    {
        icon: 'fas fa-globe-americas',
        title: 'Misión',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione voluptatum aperiam praesentium reiciendis rem dolor. Similique, excepturi velit. Soluta recusandae commodi quis nobis tenetur sit quos eius reprehenderit reiciendis.',
        imgSrc: 'url("https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'
    },
    {
        icon: 'fas fa-eye',
        title: 'Visión',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione voluptatum aperiam praesentium reiciendis rem dolor. Similique, excepturi velit. Soluta recusandae commodi quis nobis tenetur sit quos eius reprehenderit reiciendis.',
        imgSrc: 'url("https://images.pexels.com/photos/279470/pexels-photo-279470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
        left: false,
    }
]

export default () => {
    return (
        <React.Fragment>
            {data.map((item, index) => <Banner key={index}><DobleColumn {...item} /></Banner>)}
        </React.Fragment>
    )
}