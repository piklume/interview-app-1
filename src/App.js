import React, { useState, useEffect } from 'react';
import CardCollection from './card-collections';
import SearchBar from './search-bar';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: "center",
  rowGap: '10px'
}

export default function App() {
  const [userList, setUserList] = useState([]);
  const [filteredUserList, setFilteredUserList] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) =>setUserList(json));
  },[]);

  useEffect(() => {
    const filteredList = userList.filter((user) => user.name.includes(searchText));
    setFilteredUserList(filteredList);
  }, [searchText, userList])

  const onSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div style={style}>
      <h1>Friend Finder</h1>
      <p>Search for your real friends :)</p>
      <SearchBar text={searchText} onChange={onSearchChange} />
      <CardCollection userList={searchText ? filteredUserList : userList} />
    </div>
  );
}
