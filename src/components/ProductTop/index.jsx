import React, { useState } from 'react'
import './index.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProductTop() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('all');
    const [company, setCompany] = useState('all');
    const [sort, setSort] = useState('a-z');
    const [price, setPrice] = useState('1000');
    const navigate = useNavigate()

    function onReset(e) {
        e.preventDefault()
        setSearch('')
        setCategory('all');
        setCompany('all');
        setSort('a-z');
        setPrice('1000')
    }
    function handleOpenCardInfo(id) {
        navigate(`/products/${id}`)
    }
    function handleSearch(e) {
        e.preventDefault();
        axios.get(`https://strapi-store-server.onrender.com/api/products?filters[price][$lte]=${price}&search=${search}&category=${category}&company=${company}&order=${sort}`)
            .then(response => {
                console.log(response.data.data);

                if (response.status === 200) {
                    setProducts(response.data.data);
                }
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }

    return (
        <div className="allWr">
            <div className='producttop'>
                <div className="container top-container">
                    <div className="productSame">
                        <div className="select1">
                            <label className='select1Flex' htmlFor="select1Input">
                                Search Product
                                <input value={search} onChange={(e) => { setSearch(e.target.value) }} id='select1Input' type="text" placeholder='' />
                            </label>
                        </div>
                        <div className="select2">
                            <label className='select1Flex' htmlFor="select2Value">
                                Select Category
                                <select value={category} onChange={(e) => { setCategory(e.target.value) }} id="select2Value">
                                    <option value="all">all</option>
                                    <option value="Tables">Tables</option>
                                    <option value="Chair">Chair</option>
                                    <option value="Kids">Kids</option>
                                    <option value="Sofas">Sofas</option>
                                    <option value="Beds">Beds</option>
                                </select>
                            </label>
                        </div>
                        <div className="select3">
                            <label className='select1Flex' htmlFor="select3Value">
                                Select Company
                                <select value={company} onChange={(e) => { setCompany(e.target.value) }} id="select3Value">
                                    <option value="all">all</option>
                                    <option value="Modenza">Modenza</option>
                                    <option value="Luxora">Luxora</option>
                                    <option value="Artiflex">Artiflex</option>
                                    <option value="Comfora">Comfora</option>
                                    <option value="Homestead">Homestead</option>
                                </select>
                            </label>
                        </div>
                        <div className="select4">
                            <label className='select1Flex' htmlFor="select3Value">
                                Sort by
                                <select value={sort} onChange={(e) => { setSort(e.target.value) }} id="select3Value">
                                    <option value="a-z">a-z</option>
                                    <option value="z-a">z-a</option>
                                    <option value="high">high</option>
                                    <option value="low">low</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="productSame2">
                        <div className="selectPrice">
                            <label htmlFor="selectPrice1">
                                <div className="labelTopSame">
                                    <div className="topdesc1">Select price</div>
                                    <div className="topdesc1">${price}.00</div>
                                </div>
                                <input value={price} min={0} max={1000} onChange={(e) => { setPrice(e.target.value) }} id='selectPrice1' type="range" placeholder='Price of thing' />
                                <div className="labelBottomSame">
                                    <div className="botdesc1">0</div>
                                    <div className="botdesc2">Max : $1,000.00 </div>
                                </div>
                            </label>
                        </div>
                        <div className="selectShiping">
                            <label id='selectFlex' htmlFor="selectCheck">
                                Free Shipping
                                <input type="checkbox" id='selectCheck' />
                            </label>
                        </div>
                        <button onClick={handleSearch} className='productBtn1'>SEARCH</button>
                        <button onClick={onReset} className='productBtn2'>RESET</button>
                    </div>
                </div>
            </div>
            <div className="cards">
                {products.length > 0 ? (
                    products.map((data, index) => (
                        <div className="findCard" onClick={() => { handleOpenCardInfo(data.id) }} key={index}>
                            <img src={data.attributes.image} width={200} height={220} alt="" />
                            <div className="cardDesc">{data.attributes.title}</div>
                            <div className="cardPrice">
                                ${String(data.attributes.price)
                                    .split('')
                                    .map((char, index) => (index === 2 ? char + '.' : char))
                                    .join('')}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products found</p>
                )}



            </div>
        </div>
    )
}

export default ProductTop
