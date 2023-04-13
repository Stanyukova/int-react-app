import React from 'react'
import Main from '../components/Main'
type HeaderProps = {
  searchValue: string;
  setSearchValue: any;
};
export const Home: React.FC<HeaderProps> = ({searchValue,setSearchValue}) => {
  return (
    <div data-testid="main">
          <Main searchValue={searchValue} setSearchValue={setSearchValue}/>
    </div>
  )
}

export default Home