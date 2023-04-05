
import React, { useState } from "react";
import Oggmenu from "./Oggmenu";
import Search from "./Search";
type SidebarProps = {
  value:number, onClickCategory:(i:number) => void,searchValue:string,setSearchValue:any, items: any
}
const Sidebar: React.FC<SidebarProps> =({items, value, onClickCategory,searchValue,setSearchValue}) => {
  const [ogg_class, setoggClass] = useState("ogg-bar clicked");
  const [menu_class, setMenuClass] = useState("menu2 visible");
  const [interval_class, setIntervalClass] = useState("ogg");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [checked, setChecked] = useState(true);
  React.useEffect(() => {
    // const sortBy = sortType.sortProperty.replace('-', '');
    // const order = sortType.sortProperty.includes('-')? 'asc' : 'desc';
    // const category= categoryId < 11 ? `typecare=${categoryId}` : '';
    const url = new URL('https://642a9b1000dfa3b54749b441.mockapi.io/items');
    url.searchParams.append("brand", "Levrana"); 
    fetch(url)
      .then((res) => {
        if (res.ok) {
        return res.json();
      }})
      .then((arr) => {
        console.log(arr);
       
      });
  }, [checked]);
  

   function chengeCheckbox() {
      setChecked(!checked);
   }
   
  
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

  return (
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
  <input type="text" placeholder="0"/> - <input type="text" placeholder="10000" />
  </div>
  <div className="line"></div>
  <div className="bold">Бренд</div>
  <Search searchValue={searchValue} setSearchValue={setSearchValue} />
  <div>
  <div className="checkbox"><input type="checkbox" id="Levrana" name="Levrana" checked={checked} onChange={chengeCheckbox} />
      <label htmlFor="Levrana">Levrana (4)</label></div>
<div className="checkbox"><input type="checkbox" id="Купажъ" name="Купажъ" checked={checked} onChange={chengeCheckbox} />
      <label htmlFor="horns">Купажъ  (7)</label></div>
<div className="checkbox"><input type="checkbox" id="Mi&Ко" name="Mi&Ко" checked={checked} onChange={chengeCheckbox} />
      <label htmlFor="Mi&Ко">Mi&Ко (5)</label></div>
<div className="checkbox"><input type="checkbox" id="Laboratorium" name="Laboratorium" checked={checked} onChange={chengeCheckbox} />
      <label htmlFor="Laboratorium">Laboratorium  (1)</label></div>
<div className="checkbox"><input type="checkbox" id="horns" name="horns" checked={checked} onChange={chengeCheckbox} />
      <label htmlFor="horns">Твои Традиции  (1)</label></div>
<div className="checkbox"><input type="checkbox" id="Lime" name="Lime" checked={checked} onChange={chengeCheckbox} />
      <label htmlFor="Lime">Lime  (1)</label></div>
        
  </div>




</div>
               </div>
              </div>
            <div className={interval_class}>
            <Oggmenu value={value} onClickCategory={onClickCategory} />
            </div>
            
         
        
          </div>
        </div>
    
     
 
  );
};

export default Sidebar;
