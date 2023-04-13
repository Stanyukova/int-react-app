import React, { useState } from "react";
import Oggmenu from "./Oggmenu";
import ProductBlock from "./ProductBlock";
// import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Sort from "./Sort";
import Pagination from "./Pagination";
import Search from "./Search";
type HeaderProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;

};
export const Main: React.FC<HeaderProps> = ({searchValue,setSearchValue})=> {
  const [ogg_class, setoggClass] = useState("ogg-bar clicked");
  function chengeValue(event:React.ChangeEvent<HTMLInputElement>) {
// let num=event.target.value
    setValue(event.target.value);
    
 }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const arOptions:Array<string>   = ['Все', 'Laboratorium', 'Levrana','Lime', 'Mi&Ко','Купажъ', 'Твои Традиции'];
  const [value, setValue] = useState('');
  const options = arOptions.map((text, index:number) => {
    return  <div key={index}><input type="checkbox" name="radio" value={index}
    checked={value === `${index}` ? true : false}
    onChange={chengeValue} />  <span>{text}</span></div>
   

 });
 const num:any = {value}.value
 const limit = 12;


  const [menu_class, setMenuClass] = useState("menu2 visible");
  const [interval_class, setIntervalClass] = useState("ogg");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  // const [checked, setChecked] =  React.useState(false);
  const [inputValuea, setInputValuea] =  React.useState("0");
  const [inputValueb, setInputValueb] =  React.useState("10000");
  const [items, setItems] = React.useState([]);
  const [categoryId, setCategoryId] = React.useState(11);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState(
    { name: 'по убыванию цены', sortProperty: 'price'},

  );

function onInputValuea(event:React.ChangeEvent<HTMLInputElement>) {
  setInputValuea(event.target.value);
  console.log(event.target.value)
}
function onInputValueb(event:React.ChangeEvent<HTMLInputElement>) {
  setInputValueb(event.target.value);
}
let a = inputValuea
console.log(a)

  React.useEffect(() => {
   
    
    
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-')? 'asc' : 'desc';
    const category= categoryId < 11 ? `typecare=${categoryId}` : '';
    const btand = value > "0" ? `brand=${arOptions[num]}` : '' ;
    fetch(`https://642a9b1000dfa3b54749b441.mockapi.io/items?page=${currentPage}&limit=${limit}&${category}&sortBy=${sortBy}&order=${order}&${btand}`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
       
        let arr2 = arr.filter((item:any) => (+inputValuea <= item.price && item.price <= +inputValueb))
        console.log(arr2)
        setItems(arr2);
        
       
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sortType, currentPage, value, inputValuea, inputValueb]);

 

  const updateMenu = () => {
    if (!isMenuClicked) {
      setoggClass("ogg-bar unclicked");
      setMenuClass("menu2 hidden");
      setIntervalClass("ogg_interval")
    } else {
      setoggClass("ogg-bar clicked");
      setMenuClass("menu2 visible");
      setIntervalClass("ogg")
    }
    setIsMenuClicked(!isMenuClicked);
  };
  console.log(items)

//@ts-ignore
let pages= parseInt(items.length/limit,10);
console.log(pages)



  return (
    <div className="main">
      <div className="container">
        <div className="breadcrumbs">
          <ul className="breadcrumbs-list">
            <li>
              <div>Главная</div>
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
              <Link to="/int-react-app">Каталог</Link>
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
              <div>Косметика и гигиена</div>
            </li>
          </ul>
        </div>
        <div className="title__block">
          <div>
            <h1>Косметика и гигиена</h1>
          </div>
          <Sort value={sortType} onClickSort={(id) => setSortType(id)} />
        </div>
        
        <div className="navigation__content">
       
          <Oggmenu value={categoryId}  onClickCategory={(id:number) => setCategoryId(id)} />
          
        </div>
        <div className="main__block">
        <div className="sidebar">
      

      <div className="header__bottom-wrapper">
     
        <div className="bold">ПОДБОР ПО ПАРАМЕТРАМ</div>
        <div className="pos">
          <nav>
            <div className="burger-menu" onClick={updateMenu}>
              <div className={ogg_class}></div>
              <div className={ogg_class}></div>
              
            </div>
          </nav>

       
        </div>
        <div className={menu_class}>
           <div className="sidebarSort">
<div className="sidebarSort__price">
<p>Цена ₸</p>
<div className="sidebarSort__price-input">
<input type="text" placeholder={inputValuea} onChange= {onInputValuea}/> - <input type="text" placeholder={inputValueb} onChange= {onInputValueb} />
</div>
<div className="line"></div>
<div className="bold">Бренд</div>
<Search searchValue={searchValue} setSearchValue={setSearchValue} />
<div>
{options}
</div>

<div>
    
   </div>



</div>
           </div>



          </div>



        <div className={interval_class}>
        <Oggmenu value={categoryId}  onClickCategory={(id:number) => setCategoryId(id)} />
        </div>
        
     
    
      </div>
    </div>


          {/* <Sidebar items={items} searchValue={searchValue} setSearchValue={setSearchValue} value={categoryId} onClickCategory={(id:number) => setCategoryId(id)}/> */}
        <div className="block-main">
        <div className="main__content">
            {items.filter((obj:any) => {
              if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {return true}
              return false
            }).map((obj:any) => (
               
              <ProductBlock key={obj.id} {...obj} />
            ))}
           
          </div>
         <Pagination  onChangePage={(number:number) => setCurrentPage(number)} />
          </div> 
        
        </div>
        
      </div>
    </div>
  );
}
export default Main;
