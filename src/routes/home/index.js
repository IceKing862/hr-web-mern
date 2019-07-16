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
            imgSrc: "./imgs/proveedores/samsung_logo_PNG14.png",
            height: "48px",
            title: "Samsung"
        }, {
            imgSrc: "./imgs/proveedores/staedtler.png",
            height: "60px",
            title: "Staedtler" 
        }, {
            imgSrc: "./imgs/proveedores/Canon_logo_vector.png",
            height: "60px",
            title: "Canon"
        }, {
            imgSrc: "./imgs/proveedores/Genius,_KYE_Systems_Corp_logo.PNG",
            height: "48px",
            title: "Genius"
        }, {
            imgSrc: "./imgs/proveedores/HP_logo_630x630.png",
            height: "60px",
            title: "HP"
        }, {
            imgSrc: "./imgs/proveedores/artline1logo._V302579097_.png",
            height: "48px",
            title: "Artline"
        }, {
            imgSrc: "./imgs/proveedores/bic.png",
            height: "48px",
            title: "Bic"
        }, {
            imgSrc: "./imgs/proveedores/epson-2-logo-png-transparent.png",
            height: "48px",
            title: "Epson"
        }, {
            imgSrc: "./imgs/proveedores/tide.png",
            height: "60px",
            title: "Tide"
        }, {
            imgSrc: "./imgs/proveedores/kingston-logo-png-4.png",
            height: "48px",
            title: "Kingstone"
        }, {
            imgSrc: "./imgs/proveedores/nestle.jpg",
            height: "48px",
            title: "Nestle"
        }, {
            imgSrc: "./imgs/proveedores/mccormick-2-logo-png-transparent.png",
            height: "60px",
            title: "McCormick"
        }, {
            imgSrc: "./imgs/proveedores/quaker.jpg",
            height: "60px",
            title: "Quaker"
        }, {
            imgSrc: "./imgs/proveedores/casio.png",
            height: "48px",
            title: "Casio"
        }, {
            imgSrc: "./imgs/proveedores/1280px-Coca-Cola_logo.svg.png",
            height: "60px",
            title: "Coca Cola"
        }, {
            imgSrc: "./imgs/proveedores/tosh.png",
            height: "60px",
            title: "Tosh"
        }, {
            imgSrc: "./imgs/proveedores/Splenda_Logo.svg.png",
            height: "60px",
            title: "Splenda"
        }, {
            imgSrc: "./imgs/proveedores/lysol.jpg",
            height: "48px",
            title: "Lysol"
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
            <List
                data={data.suppliers}
                title='Nuestros Proveedores'
                text='Estas son algunas de las marcas de nuestros productos'
                type='suppliers'
            />
        </React.Fragment>
    )
}