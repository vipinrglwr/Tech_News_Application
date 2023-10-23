import React from 'react'
import { useGlobalContext } from "./Context"


const Search = () => {

  const { query, SearchPost } = useGlobalContext();

  return (
    <div>
      <h1>Tech News Website</h1>
      <form  >
        <input type='text' placeholder='Search Here...' value={query} onChange={(e) => SearchPost(e.target.value)} />
      </form>
    </div>
  )
}

export default Search
