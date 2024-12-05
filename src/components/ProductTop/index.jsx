import React from 'react'

function ProductTop() {
    return (
        <div className='producttop'>
            <div className="container top-container">
                <div className="productSame">
                    <div className="select1">
                        <label htmlFor="select1Input">
                            Search Product
                            <input id='select1Input' type="text" placeholder='' />
                        </label>
                    </div>
                    <div className="select2">
                        <label htmlFor="select2Value">
                            Select Category
                            <select id="select2Value">
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
                        <label htmlFor="select3Value">
                            <select id="select3Value">
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
                        <label htmlFor="select3Value">
                            Select Company
                            <select id="select3Value">
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
                            Select Price $0.00
                            <input id='selectPrice1' type="number" placeholder='Price of thing' />
                        </label>
                    </div>
                    <div className="selectShiping">
                        <label htmlFor="selectCheck">
                            Free Shipping
                            <input type="checkbox" id='selectCheck' />
                        </label>
                    </div>
                    <button className='productBtn1'>SEARCH</button>
                    <button className='productBtn2'>RESET</button>
                </div>
            </div>
        </div>
    )
}

export default ProductTop