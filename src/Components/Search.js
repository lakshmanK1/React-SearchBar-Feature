import React,{useState, useEffect, Fragment} from 'react'
import { RawData } from './RawData'
import { MainDiv, SearchDiv, SearchInput, ItemsDiv, ListDiv, H3, P} from './StyledCmp'

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
        <ItemsDiv>
            {
                RawData.map((data)=>(
                    <ListDiv key={data.id}>
                        <H3>{data.title}</H3>
                        <P>{data.description}</P>
                    </ListDiv>
                ))
            }
        </ItemsDiv>
    </MainDiv>
  )
}

export default Search