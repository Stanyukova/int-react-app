import React from 'react'
import { Link } from 'react-router-dom'

const Order:React.FC = () => {
  return (
    <div className='cartEmpty'>
        <div className="container">
        <div>
          <ul className="breadcrumbs-list">
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <a href="">
                <svg
                  width="2"
                  height="17"
                  viewBox="0 0 2 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M1 0.5V16.5"
                    stroke="#3F4E65"
                    stroke-dasharray="2 2"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="">Корзина</a>
            </li>
          </ul>
        </div>
        <h2>Спасибо за заказ!</h2>
        </div>
    </div>
  )
}

export default Order