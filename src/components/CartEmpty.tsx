import React from 'react'
import { Link } from 'react-router-dom'

const CartEmpty:React.FC = () => {
  return (
    <div className='cartEmpty'>
        <div className="container">
        <div>
          <ul className="breadcrumbs-list">
            <li>
              <Link to="/int-react-app" data-testid="main-link" >Главная</Link>
            </li>
            <li>
              <div>
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
              </div>
            </li>
            <li>
              <div>Корзина</div>
            </li>
          </ul>
        </div>
        <h2>Корзина пуста</h2>
        </div>
    </div>
  )
}

export default CartEmpty