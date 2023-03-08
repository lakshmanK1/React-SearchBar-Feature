import React,{useState, useEffect} from 'react'
import { RawData } from './RawData'
import { MainDiv, SearchDiv, SearchInput, ItemsDiv, ListDiv, H3, P} from './StyledCmp'

function Search() {
    const [search, setSearch] = useState('');
    const [filteredArr, setFilteredArr] = useState([]);

    useEffect(()=>{
        let FilteredData = RawData.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
        setFilteredArr(FilteredData);
    },[search]);

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
                filteredArr.map((data)=>(
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