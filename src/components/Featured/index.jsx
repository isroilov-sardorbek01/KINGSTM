import React, { useEffect, useState } from 'react'
import './index.css'
import imageCard1 from '../../images/img2.jpg';
import imagecard2 from '../../images/img3.jpg';
import imageCard3 from '../../images/img4.jpg'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Featured() {
    const [feat, setFeat] = useState([]);
    const navigate = useNavigate();

    function handleOpenCardInfo(id) {
        navigate(`/products/${id}`)
    }

    useEffect(function () {
        axios.get(`https://strapi-store-server.onrender.com/api/products?featured=true`)
            .then(response => {
                if (response.status == 200) {
                    setFeat(response.data.data)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div className='featured'>
            <div className="container feat-container">
                <h1>Featured Products</h1>
                <hr />
                <div className="cards">
                    {
                        feat.length > 0 && feat.map((data, index) => {
                            return (
                                <div className="card" onClick={() => { handleOpenCardInfo(data.id) }} key={index}>
                                    <img src={data.attributes.image} width={300} height={200} alt="" />
                                    <div className="cardDesc">{data.attributes.title}</div>
                                    <div className="cardPrice">
                                        ${String(data.attributes.price)
                                            .split('')
                                            .map((char, index) => (index === 2 ? char + '.' : char))
                                            .join('')}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Featured
