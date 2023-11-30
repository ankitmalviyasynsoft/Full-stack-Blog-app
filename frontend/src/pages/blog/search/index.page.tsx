import React from 'react'
import { Page } from '@/types/Page.type'

const Search :Page = () => {
  return (
    <div>Search</div>
  )
}

Search.layoutProps = {
  isProtectedPage : false,
  title:'Search'
}


export default Search