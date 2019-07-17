import React from 'react'
import Banner from './../../components/banner'
import List from './../../components/list'
import Article from './../../components/bannerArticle'

const data = {
    testimonials: [
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, conse',
            name: 'Academia Británica Cuscatleca',
            imgSrc: './static/testimonials/Academia.png',
        },
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
            name: 'Comex',
            imgSrc: './static/testimonials/Logo_comex.png',
        },
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
            name: 'ITCA FEPADE',
            imgSrc: './static/testimonials/itca.png',
        }
    ],
    cards: [
        { 
            title: 'MOBILIARIO DE OFICINA', 
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 
            imgSrc: 'https://www.suppliesweb.com/wp-content/uploads/2017/10/Service_1.jpg' 
        },
        { 
            title: 'PAPELERÍA', 
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 
            imgSrc: 'https://www.suppliesweb.com/wp-content/uploads/2017/10/Office-Supplies_shape.png' 
        },
        { 
            title: 'PRODUCTOS DE LIMPIEZA', 
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 
            imgSrc: 'https://www.suppliesweb.com/wp-content/uploads/2017/10/FM_Shape.png' 
        },
        { 
            title: 'PRODUCTOS DE CAFETERÍA', 
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 
            imgSrc: 'https://www.suppliesweb.com/wp-content/uploads/2017/10/Technology_shape.png' 
        },
        { 
            title: 'EQUIPOS DE IMPRESIÓN', 
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 
            imgSrc: 'https://www.suppliesweb.com/wp-content/uploads/2017/10/Print_shape.png' 
        },
        { 
            title: 'EQUIPO DE INFORMÁTICA', 
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 
            imgSrc: 'https://www.suppliesweb.com/wp-content/uploads/2017/10/Education_Shape.png' 
        }
    ],
    suppliers: [
        {
            imgSrc: "./static/suppliers/samsung.png",
            title: "Samsung"
        }, {
            imgSrc: "./static/suppliers/casio.png",
            title: "Casio"
        }, {
            imgSrc: "./static/suppliers/hp.png",
            title: "HP"
        }, {
            imgSrc: "./static/suppliers/epson.png",
            title: "Epson"
        }, {
            imgSrc: "./static/suppliers/canon.png",
            title: "Canon"
        }
    ]
}

export default () => {
    return (
        <React.Fragment>
            <Banner image="url('./static/media/slide2.jpg')" />
            <List
                data={data.cards}
                title='Nuestros Productos'
                text='Conoce las categorías de nuestros productos'
                type='card'
            />
            <Banner image="url('./static/media/slide1.jpg')">
                <Article />
            </Banner>
            <List
                data={data.testimonials}
                title='Opiniones'
                text='Entérate de lo que nuestros clientes piensan de nosotros'
                type='testimonial'
            />
        </React.Fragment>
    )
}