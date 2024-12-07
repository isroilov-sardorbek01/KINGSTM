import React, { useState, useEffect } from 'react';

function Cart() {
  const [cartPr, setCartPr] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));

    if (storedCart) {
      setCartPr(storedCart);
    }
    console.log(storedCart);

  }, []);

  function handleDel(e, id) {
    console.log(cartPr.id);
    if (confirm('Ochirmoqchimiz ?')) {
      const newData = cartPr.filter(item => item.pr.id != id);
      setCartPr(newData);
      localStorage.setItem('cart', JSON.stringify(newData))
    }
  }
  return (
    <div>
      <h2>Shopping Cart</h2>
      <hr />
      {cartPr.length > 0 ? (
        <div>
          {cartPr.map((item, index) => (
            <div key={index}>
              <img src={item.pr.image} alt={item.pr.title} width={100} />
              <h3>{item.pr.title}</h3>
              <p>{item.pr.category}</p>
              <p>${item.pr.price}</p>
              <p>Amount: {item.pr.mount}</p>
              <div className="color" style={{
                userSelect: 'none',
                width: '20px',
                padding: '10px',
                borderRadius: '50%',
                backgroundColor: item.selectedColor,
                cursor: 'pointer'
              }}>
                <button onClick={(e) => { handleDel(e, item.pr.id) }}>remove</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
