import React,{useState, useEffect, Fragment} from 'react'
import { RawData } from './RawData'
import { MainDiv, SearchDiv, SearchInput } from './StyledCmp'

function Search() {
    const [search, setSearch] = useState('');

    const InputVal = (e) => {
        setSearch(e.target.value);
    }

  return (
    <MainDiv>
        <SearchDiv>
            <SearchInput type='search' value={search} onChange={InputVal} placeholder='search here..'/>
        </SearchDiv>
    </MainDiv>
  )
}

export default Search