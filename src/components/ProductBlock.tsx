import React from "react";
import { useDispatch } from "react-redux";
import {addItem} from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
// import { selectCartItemById } from '../redux/cart/selectors';
import { CartItem } from '../redux/cart/types';
type ProductBlockProps = {
  title:string,
  barcode:string,
  imageUrl:string,
  weight:string,
  icon:string,
  manufacturer:string,
  brand:string,
  description:string,
  price:number,
  id:string,

 
}

const ProductBlock: React.FC <ProductBlockProps>=({
  title,
  barcode,
  imageUrl,
  weight,
  icon,
  manufacturer,
  brand,
  description,
  price,
  id
}) =>{

  const dispatch = useDispatch();
  // const cartItem:any = useSelector(selectCartItemById(id))
  // const cc = cartItem.count;
  

  const onClickAdd = () => {
  
    const item: CartItem = {
      id, 
      title,
      description,
      icon,
      weight,
      price,
      imageUrl,
      count : 0,

    };
   
    dispatch(addItem(item))
    
  }
 

  return (
    <div className="product__block">
      <img src={imageUrl} alt="" />
      <div className="product__size">
        <img src={icon} alt="" />

        <div>{weight}</div>
      </div>
      <Link to={`/product/${id}`}> <h4 className="product__title">{title}</h4></Link>
     
      <div className="product__info">
        Штрихкод: <b>{barcode}</b>
      </div>
      <div className="product__info">
        Производитель: <b>{manufacturer}</b>
      </div>
      <div className="product__info">
        Бренд: <b>{brand}</b>
      </div>
      <div className="product__price-block">
        <div className="product__price">{price}  ₸ </div>
        <div>
          <button onClick={onClickAdd} className="button1">
            <div>В КОРЗИНУ </div>{" "}
            <div className="count">
              {" "}
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.448 8.09209C24.2955 7.87908 24.0909 7.77258 23.8341 7.77258H7.48756L7.0439 6.61757C6.93156 6.23889 6.77908 5.91543 6.58649 5.6472C6.39389 5.37897 6.18926 5.18963 5.97259 5.07918C5.75592 4.96873 5.56734 4.89378 5.40684 4.85434C5.24635 4.81489 5.08585 4.79517 4.92536 4.79517H1.62717C1.41852 4.79517 1.24198 4.86617 1.09753 5.00817C0.953083 5.15018 0.880859 5.33163 0.880859 5.55253C0.880859 5.67876 0.912959 5.80104 0.977157 5.91938C1.04136 6.03772 1.13364 6.12844 1.25401 6.19155C1.37438 6.25467 1.49877 6.28622 1.62717 6.28622H4.92536C4.98955 6.28622 5.04974 6.29411 5.10591 6.30989C5.16209 6.32567 5.23832 6.39273 5.33462 6.51107C5.43092 6.62941 5.51117 6.80691 5.57537 7.04359L9.02832 16.5248C9.06042 16.6195 9.11258 16.7102 9.1848 16.797C9.25703 16.8838 9.34129 16.9508 9.43758 16.9982C9.53388 17.0455 9.6382 17.0692 9.75055 17.0692H20.1507C20.3112 17.0692 20.4596 17.0218 20.5961 16.9272C20.7325 16.8325 20.8248 16.7142 20.8729 16.5722L24.5563 8.79029C24.6365 8.53783 24.6004 8.3051 24.448 8.09209ZM19.621 15.5545H10.3524L7.89682 9.2873H22.7266L19.621 15.5545ZM18.2328 17.8905C17.7031 17.8905 17.2497 18.0759 16.8726 18.4467C16.4954 18.8175 16.3068 19.2633 16.3068 19.784C16.3068 20.3047 16.4954 20.7504 16.8726 21.1212C17.2497 21.492 17.7031 21.6774 18.2328 21.6774C18.7624 21.6774 19.2158 21.492 19.593 21.1212C19.9701 20.7504 20.1587 20.3047 20.1587 19.784C20.1587 19.2633 19.9701 18.8175 19.593 18.4467C19.2158 18.0759 18.7624 17.8905 18.2328 17.8905ZM11.2993 17.8905C10.9462 17.8905 10.6212 17.9773 10.3243 18.1509C10.0274 18.3245 9.79469 18.5532 9.62617 18.8373C9.45765 19.1213 9.37339 19.4368 9.37339 19.784C9.37339 20.3047 9.56197 20.7504 9.93913 21.1212C10.3163 21.492 10.7697 21.6774 11.2993 21.6774C11.829 21.6774 12.2824 21.492 12.6595 21.1212C13.0367 20.7504 13.2253 20.3047 13.2253 19.784C13.2253 19.6577 13.2133 19.5315 13.1892 19.4053C13.1651 19.2791 13.129 19.1607 13.0808 19.0503C13.0327 18.9398 12.9725 18.8333 12.9003 18.7308C12.8281 18.6282 12.7478 18.5335 12.6595 18.4467C12.5713 18.36 12.475 18.2811 12.3706 18.2101C12.2663 18.1391 12.158 18.0799 12.0456 18.0326C11.9333 17.9852 11.8129 17.9497 11.6845 17.9261C11.5561 17.9024 11.4277 17.8905 11.2993 17.8905Z"
                  fill="white"
                />
              </svg>
         
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductBlock;
