import React from 'react';

const Menu = ({items}) => {
  
  return (
    <div className="section-center">
      {items.map((item) => (
        <article key={item.id} className="menu-item">
          <img src={item.img} alt={item.title} className="photo"/>
          <div className="item-info">
            <header>
              <h4>{item.title}</h4>
              <span className='price'>${item.price}</span>
            </header>
            <p className='item-text'>{item.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Menu;