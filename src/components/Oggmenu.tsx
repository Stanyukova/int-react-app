import React, { useState } from "react";
type OggmenuProps = {
  value: number;
  onClickCategory: (i:number) => void;
};
export const Oggmenu: React.FC<OggmenuProps> =({value, onClickCategory}) =>{

  const categories = [
   
    " Уход за телом",
    "Уход за руками",
    "Уход за ногами",
    "Уход за лицом",
    "Уход за волосами",
    "Средства для загара",
    "Средства для бритья",
    "Подарочные наборы",
    "Гигиеническая продукция",
    "Гигиена полости рта",
    "Бумажная продукция",
    "Все"
  ];

  return (
    <div className="categories">
      <ul className="ogg-menu">
        {categories.map((categoryName, i) => (
          <li
          key={i}
            onClick={() => onClickCategory(i)}
            className={value === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
 
  );

}
export default Oggmenu;
