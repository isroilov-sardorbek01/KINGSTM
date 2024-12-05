import React from 'react'
import './index.css'
import imageCard1 from '../../images/mebel1Img.webp';
import imagecard2 from '../../images/mebel2Img.jpg';
import imageCard3 from '../../images/mebel3Img.jpg'

function Featured() {
    return (
        <div className='featured'>
            <div className="container feat-container">
                <h1>Featured Products</h1>
                <hr />
                <div className="cards">
                    <div className="card">
                        <img src={imageCard1} width={300} height={200} alt="" />
                        <div className="cardDesc">Avant-Garde Lamp</div>
                        <div className="cardPrice">$179.99</div>
                    </div>
                    <div className="card">
                        <img src={imagecard2} width={300} height={200} alt="" />
                        <div className="cardDesc">Coffee Table</div>
                        <div className="cardPrice">$179.99</div>
                    </div>
                    <div className="card">
                        <img src={imageCard3} width={300} height={200}  alt="" />
                        <div className="cardDesc">Avant-Garde Lamp</div>
                        <div className="cardPrice">$179.99</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
