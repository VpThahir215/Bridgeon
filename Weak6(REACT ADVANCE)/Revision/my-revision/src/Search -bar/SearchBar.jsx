import React, { useState } from 'react'

function SearchBar() {
    let [search,setSearch]=useState()

    const users = [
  { id: 1, name: "Ronaldo" },
  { id: 2, name: "Messi" },
  { id: 3, name: "Neymar" },
  { id: 4, name: "Mbappe" },
  
];
let filteredUsers=users.filter((user)=>users.name.toLowerCase().includes(search.toLowerCase())

)


  return (
    <div>
    <input type="text" placeholder='Search....' value={search} onChange={(e)=>setSearch(e.target.value)} />
    
      {filteredUsers.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
}
    

export default SearchBar
