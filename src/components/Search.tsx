import React from 'react';
import { useDispatch } from 'react-redux';
type HeaderProps = {
  searchValue: string;
  setSearchValue:any ;
};
export const Search: React.FC<HeaderProps> = ({searchValue,setSearchValue}) =>{
  return (
    <div className="search">
     {searchValue &&( <svg
          onClick={(event: React.MouseEvent<SVGSVGElement>)=>setSearchValue('')}
          className='svg'
          width="29"
          height="29"
        
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>)}
      <input
        // ref={inputRef}
        value={searchValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
        // className={styles.input}
        placeholder="Поиск..."
      />
      <svg
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="39" height="39" rx="19.5" fill="#FFC85E" />
        <path
          d="M27.5297 27.5294L24.0992 24.0928L27.5297 27.5294ZM26.0002 19.5C26.0002 21.2239 25.3154 22.8772 24.0964 24.0962C22.8775 25.3152 21.2242 26 19.5002 26C17.7763 26 16.123 25.3152 14.9041 24.0962C13.6851 22.8772 13.0002 21.2239 13.0002 19.5C13.0002 17.7761 13.6851 16.1228 14.9041 14.9038C16.123 13.6848 17.7763 13 19.5002 13C21.2242 13 22.8775 13.6848 24.0964 14.9038C25.3154 16.1228 26.0002 17.7761 26.0002 19.5V19.5Z"
          stroke="white"
          stroke-width="1.3"
          stroke-linecap="round"
        />
      </svg>
 
    </div>
  );
}

export default Search;
