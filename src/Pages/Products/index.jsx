import React, { useEffect, useState } from 'react'
import './index.css';
import ProductTop from '../../components/ProductTop';
import axios from 'axios';


function Products() {
    const [res, setRes] = useState([]);

    function handleOpenCardInfo(e){
        e.preventDefault()
        console.log('yedi');
        
    }
    useEffect(function () {
        axios.get('https://strapi-store-server.onrender.com/api/products')
            .then(response => {
                console.log(response);

                if (response.status == 200) {
                    setRes(response.data.data)
                }
            })
            .catch(err => {
                console.log(err);

            })
    }, [])
    return (
        <div className='All'>
            <div className="container all-container">
                <ProductTop />
                <div className="productWr">
                    <div className="container">
                        <div className="productWr-container">
                            {
                                res.length > 0 && res.map((thing, index) => {
                                    return (
                                        <div className="openCard" onClick={handleOpenCardInfo} key={index}>
                                            <img src={thing.attributes.image} width={200} height={220} alt="" />
                                            <div className="cardDesc">{thing.attributes.title}</div>
                                            <div className="cardPrice">${thing.attributes.price}</div>
                                        </div>  
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
