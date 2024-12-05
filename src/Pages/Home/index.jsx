import React from 'react'
import './index.css'
import './index.css';
import image1 from '../../images/img1.jpg';
import image2 from '../../images/img3.jpg';
import image3 from '../../images/img2.jpg';
import image4 from '../../images/img1.jpg';
import { useNavigate } from 'react-router-dom';
import Featured from '../../components/Featured';

function Home() {
    const navigate = useNavigate()
    function handleProducts(e) {
        e.preventDefault();
        navigate('products')
    }
    function handleGet(e) {
        e.preventDefault();
        navigate('products')
    }
    return (
        <div className='home'>
            <div className="container home-container">
                <div className="home-left">
                    <h1 onClick={handleGet}>We are changing the way people shop</h1>
                    <p className='homeTitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <p className='homeTitle'>Tempore repellat explicabo enim soluta temporibus asperiores</p>
                    <p className='homeTitle1'>aut obcaecati perferendis porro nobis.</p>
                    <button onClick={handleProducts} className='homeBtn'>OUR PRODUCTS</button>
                </div>
                <div className="home-right">
                    <img src={image1} width={350} height={400} alt="" />
                    <img src={image2} width={350} height={400} alt="" />
                    <img src={image3} alt="" width={350} height={400} />
                    <img src={image4} alt="" width={350} height={400} />
                </div>
            </div>
            <Featured />
        </div>
    )
}

export default Home
