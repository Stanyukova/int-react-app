import React from "react";
import { addItem , minusItem, removeItem} from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
type CartItemProps = {
  id: string,
  title: string,
  description: string,
  icon: string,
  weight: string,
  price: number,
  count :number,
  imageUrl: string,
}
const CartItem: React.FC<CartItemProps> =({
  id,
  title,
  description,
  icon,
  weight,
  price,
  count,
  imageUrl,
}) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
        title: "",
        price: 0,
        imageUrl: "",
        count: 0,
        description: "",
        icon: "",
        weight: ""
      })
    );
  };
  const onClickMinus = () => {
    dispatch(minusItem (id));
  };
  const onClickRemove = () => {
    dispatch(removeItem (id));
  };
  
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img src={imageUrl} className="pizza-block__image" alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <div className="product__size">
          <img src={icon} alt="" />

          <div>{weight}</div>
        </div>
        <Link to={`/product/${id}`}><h3>{title}</h3></Link>
        <p>{description}</p>
      </div>
      <div>
        <svg
          width="2"
          height="49"
          viewBox="0 0 2 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M1 0V49"
            stroke="#3F4E65"
            stroke-dasharray="2 2"
          />
        </svg>
      </div>
      <div className="cart__item-count">
        <button disabled={count===1} onClick={onClickMinus} className="button button--outline button--circle cart__item-count-minus small">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#787878"
            ></path>
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#787878"
            ></path>
          </svg>
        </button>
        <b>{count}</b>
        <button onClick={onClickPlus}className="button button--outline button--circle cart__item-count-plus small">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#787878"
            ></path>
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#787878"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <svg
          width="2"
          height="49"
          viewBox="0 0 2 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M1 0V49"
            stroke="#3F4E65"
            stroke-dasharray="2 2"
          />
        </svg>
      </div>
      <div className="cart__item-price">
        <b>{price * count} ₸ </b>
      </div>
      <div>
        <svg
          width="2"
          height="49"
          viewBox="0 0 2 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M1 0V49"
            stroke="#3F4E65"
            stroke-dasharray="2 2"
          />
        </svg>
      </div>
      <div className="cart__item-remove">
        <button onClick={onClickRemove} className="button button--outline button--circle">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.625 6.25H20.3125C20.5197 6.25 20.7184 6.33231 20.8649 6.47882C21.0114 6.62534 21.0938 6.82405 21.0938 7.03125C21.0938 7.23845 21.0114 7.43716 20.8649 7.58368C20.7184 7.73019 20.5197 7.8125 20.3125 7.8125H19.4484L18.2734 18.4C18.1673 19.3555 17.7125 20.2384 16.9961 20.8795C16.2797 21.5207 15.352 21.8751 14.3906 21.875H10.6094C9.64797 21.8751 8.72029 21.5207 8.00389 20.8795C7.28749 20.2384 6.8327 19.3555 6.72656 18.4L5.55 7.8125H4.6875C4.4803 7.8125 4.28159 7.73019 4.13507 7.58368C3.98856 7.43716 3.90625 7.23845 3.90625 7.03125C3.90625 6.82405 3.98856 6.62534 4.13507 6.47882C4.28159 6.33231 4.4803 6.25 4.6875 6.25H9.375C9.375 5.4212 9.70424 4.62634 10.2903 4.04029C10.8763 3.45424 11.6712 3.125 12.5 3.125C13.3288 3.125 14.1237 3.45424 14.7097 4.04029C15.2958 4.62634 15.625 5.4212 15.625 6.25V6.25ZM12.5 4.6875C12.0856 4.6875 11.6882 4.85212 11.3951 5.14515C11.1021 5.43817 10.9375 5.8356 10.9375 6.25H14.0625C14.0625 5.8356 13.8979 5.43817 13.6049 5.14515C13.3118 4.85212 12.9144 4.6875 12.5 4.6875V4.6875ZM10.1562 10.9375V17.1875C10.1562 17.3947 10.2386 17.5934 10.3851 17.7399C10.5316 17.8864 10.7303 17.9688 10.9375 17.9688C11.1447 17.9688 11.3434 17.8864 11.4899 17.7399C11.6364 17.5934 11.7188 17.3947 11.7188 17.1875V10.9375C11.7188 10.7303 11.6364 10.5316 11.4899 10.3851C11.3434 10.2386 11.1447 10.1562 10.9375 10.1562C10.7303 10.1562 10.5316 10.2386 10.3851 10.3851C10.2386 10.5316 10.1562 10.7303 10.1562 10.9375ZM14.0625 10.1562C13.8553 10.1562 13.6566 10.2386 13.5101 10.3851C13.3636 10.5316 13.2812 10.7303 13.2812 10.9375V17.1875C13.2812 17.3947 13.3636 17.5934 13.5101 17.7399C13.6566 17.8864 13.8553 17.9688 14.0625 17.9688C14.2697 17.9688 14.4684 17.8864 14.6149 17.7399C14.7614 17.5934 14.8438 17.3947 14.8438 17.1875V10.9375C14.8438 10.7303 14.7614 10.5316 14.6149 10.3851C14.4684 10.2386 14.2697 10.1562 14.0625 10.1562Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
