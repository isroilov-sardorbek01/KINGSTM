import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './index.css'

function ProductDeatails() {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const navigate = useNavigate()
    const [selectedColor, setSelectedColor] = useState(null);
    const [mount, setMount] = useState('1');


    useEffect(function () {
        axios.get(`https://strapi-store-server.onrender.com/api/products/${id}`)
            .then(response => {
                if (response.status == 200) {
                    setProduct(response.data.data)
                }
            })
            .catch(err => {
                console.log(err);

            })
    }, [id])


    function handleOpen(e) {
        e.preventDefault()
        navigate('/')
    }
    function handleOpenProducts(e) {
        e.preventDefault()
        navigate('/products')
    }
    function onCart(e) {
        e.preventDefault(e)
        alert('Product is added');

        const data = {
            pr: {
                image: product.attributes.image,
                title: product.attributes.title,
                category: product.attributes.category,
                price: product.attributes.price,
                colors: product.attributes.colors,
                mount: mount,
                id: product.id
            },
            selectedColor: selectedColor,
        }
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        storedCart.push(data);
        localStorage.setItem('cart', JSON.stringify(storedCart));
    }
    return (
        <div className='details'>
            <div className="container detail-container">
                <div className="detail-top">
                    <div className="detailLink1" onClick={handleOpen}>Home  </div>
                    <div className="detailLink3">{'>'}</div>
                    <div className="detailLink2" onClick={handleOpenProducts}>Products</div>
                </div>
                {
                    product.id && <>
                        <div className="wr">
                            <div className="wr-left">
                                <img src={product.attributes.image} width={500} height={350} alt="image" />
                            </div>
                            <div className="wr-right">
                                <div className="wrDesc">{product.attributes.title}</div>
                                <div className="wrCategory">{product.attributes.category}</div>
                                <div className="wrPrice">
                                    ${String(product.attributes.price)
                                        .split('')
                                        .map((char, index) => (index === 2 ? char + '.' : char))
                                        .join('')}
                                </div>
                                <p>{product.attributes.description}</p>
                                <div className="wrColors">Colors </div>
                                <div className="colorSame">
                                    {product.attributes.colors.length > 0 &&
                                        product.attributes.colors.map((value, index) => (
                                            <div
                                                key={index}
                                                className="colors"
                                                style={{
                                                    width: '20px',
                                                    padding: '10px',
                                                    borderRadius: '50%',
                                                    backgroundColor: value,
                                                    border: selectedColor === value ? '2px solid black' : '1px solid transparent',
                                                    cursor: 'pointer'
                                                }}
                                                onClick={() => setSelectedColor(value)}
                                            ></div>
                                        ))
                                    }
                                </div>
                                <label htmlFor="wrSelect">
                                    Amount
                                    <select value={mount} onChange={(e) => setMount(e.target.value)} id="wrSelect">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                    </select>
                                </label>
                                <button onClick={onCart} className='wrBtn'>ADD TO BAG</button>
                            </div>
                        </div>
                    </>
                }
            </div>

        </div>
    )
}

export default ProductDeatails