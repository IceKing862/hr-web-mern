import React from 'react'
import Banner from './../../components/banner'
import DobleColumn from './../../components/dobleColumn'
import List from './../../components/list'

const data = {
    about: [
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
    ],
    examples: [
        {
            name: '',
            imgSrc: './static/examples/office1.jpg',
        },
        {
            name: '',
            imgSrc: './static/examples/office2.jpg',
        },
        {
            name: '',
            imgSrc: './static/examples/office3.jpg',
        },
        {
            name: '',
            imgSrc: './static/examples/office4.jpg',
        },
        {
            name: '',
            imgSrc: './static/examples/office5.jpg',
        },
        {
            name: '',
            imgSrc: './static/examples/office6.jpg',
        },
    ]
}

export default () => {
    return (
        <React.Fragment>
            {data.about.map((item, index) => <Banner key={index}><DobleColumn {...item} /></Banner>)}
            <List
                data={data.examples}
                title='Nuestro Trabajo'
                text='Estos son algunos de nuestros diseños'
                type='avatar'
            />
            <List
                data={data.examples}
                title='Nuestro Trabajo'
                text='Estos son algunos de nuestros diseños'
                type='example'
            />
        </React.Fragment>
    )
}