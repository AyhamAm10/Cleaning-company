import React from 'react'
import img5 from "../assets/img5.jpg"
import img2 from "../assets/img2.jpg"
import { Link } from 'react-router-dom'

const Services = ({ setmyservice, myservice }) => {

    const items = [
        {
            id: 1,
            item: "item ",
            price: 300,
            priceE: 900,
            title: "Property Cleaning",
            img: img2
        }
        ,
        {
            id: 2,
            item: "item ",
            price: 300,
            priceE: 900,
            title: "Property Cleaning",
            img: img2
        },
        {
            id: 3,
            item: "item ",
            price: 300,
            priceE: 900,
            title: "Property Cleaning",
            img: img2
        }
        ,
        {
            id: 4,
            item: "item ",
            price: 300,
            priceE: 900,
            title: "Property Cleaning",
            img: img2
        },
        {
            id: 5,
            item: "item ",
            price: 300,
            priceE: 900,
            title: "Property Cleaning",
            img: img2
        },
        {
            id: 6,
            item: "item ",
            price: 300,
            priceE: 900,
            title: "Property Cleaning",
            img: img2
        }
    ]

    const handeloption = (e) => {
        setmyservice(e)

    }

    return (
        <div className='services'>
            <div className="bg-services d-flex align-items-center justify-content-center" style={{ backgroundImage: `url('${img5}')` }}>
                <h1 className='white'>Services 01</h1>
            </div>
            <div className="container">
                <div className="row">
                    {
                        items.map((item) => (

                            <div className="col-12 col-md-6 col-lg-4 reletive mt-50 serv" onClick={() => { handeloption(item) }}>
                                <Link to={'/order'}>
                                    <div className="abs center-abs plus-serv white ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-plus-square-dotted" viewBox="0 0 16 16">
                                            <path d="M2.5 0c-.166 0-.33.016-.487.048l.194.98A1.51 1.51 0 0 1 2.5 1h.458V0H2.5zm2.292 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zm1.833 0h-.916v1h.916V0zm1.834 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zM13.5 0h-.458v1h.458c.1 0 .199.01.293.029l.194-.981A2.51 2.51 0 0 0 13.5 0zm2.079 1.11a2.511 2.511 0 0 0-.69-.689l-.556.831c.164.11.305.251.415.415l.83-.556zM1.11.421a2.511 2.511 0 0 0-.689.69l.831.556c.11-.164.251-.305.415-.415L1.11.422zM16 2.5c0-.166-.016-.33-.048-.487l-.98.194c.018.094.028.192.028.293v.458h1V2.5zM.048 2.013A2.51 2.51 0 0 0 0 2.5v.458h1V2.5c0-.1.01-.199.029-.293l-.981-.194zM0 3.875v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 5.708v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 7.542v.916h1v-.916H0zm15 .916h1v-.916h-1v.916zM0 9.375v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .916v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .917v.458c0 .166.016.33.048.487l.98-.194A1.51 1.51 0 0 1 1 13.5v-.458H0zm16 .458v-.458h-1v.458c0 .1-.01.199-.029.293l.981.194c.032-.158.048-.32.048-.487zM.421 14.89c.183.272.417.506.69.689l.556-.831a1.51 1.51 0 0 1-.415-.415l-.83.556zm14.469.689c.272-.183.506-.417.689-.69l-.831-.556c-.11.164-.251.305-.415.415l.556.83zm-12.877.373c.158.032.32.048.487.048h.458v-1H2.5c-.1 0-.199-.01-.293-.029l-.194.981zM13.5 16c.166 0 .33-.016.487-.048l-.194-.98A1.51 1.51 0 0 1 13.5 15h-.458v1h.458zm-9.625 0h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zm1.834-1v1h.916v-1h-.916zm1.833 1h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                        </svg>
                                    </div>
                                    <img src={item.img} width="100%" className='serv-img' />
                                    <div className="abs serv-title bg-white radius-6">
                                        <div className="reletive">
                                            <span className="abs icon icon-serv">

                                                <img src="https://bdevs.net/wp/klinixer/wp-content/uploads/2020/07/service-icon-4.png" alt="" />
                                            </span>
                                            <h4 className=' font-s-15 l-blue font-w-7 '>
                                                <span className=''>{item.price} -</span>
                                                <span>{item.priceE}</span>
                                            </h4>
                                            <h3 className='co-d-blue'>
                                                {item.title}
                                            </h3>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services
