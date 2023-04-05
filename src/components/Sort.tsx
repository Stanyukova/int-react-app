import React from "react";

type SortItem = {
  name: string;
  sortProperty: string;
};
type SortProps = {
  value: SortItem;
  onClickSort: (i:SortItem) => void;
};
export const list: SortItem[] = [
{ name: 'цене (DESC)', sortProperty: 'price'},
{ name: 'цене (ASC)', sortProperty:  '-price'},
{ name: 'алфавиту (DESC)', sortProperty:'title' },
{ name: 'алфавиту (ASC)', sortProperty: '-title' },
];
export const Sort: React.FC<SortProps> =({value, onClickSort}) =>{
    const [open, setOpen] = React.useState(false);
 
  
  
    const onClickListItem = (i:SortItem) => {
      onClickSort(i);
        setOpen(false)
    }

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка:</b>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
        <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z" fill="#3F4E65"/>
</svg>

      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {
                list.map((obj, i) => (
                    <li key={i} onClick={() =>  onClickListItem(obj)}
                    className={value.sortProperty === obj.sortProperty ? 'active' : "" }>{obj.name}</li>
                ))
            }
          </ul>
        </div>
      )}
    </div>
  )
}

export default Sort