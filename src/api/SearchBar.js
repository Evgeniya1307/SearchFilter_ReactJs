//SearchBar страница сообщений панель поиска
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import React from 'react'


const SearchBar = ({post, setSearchResults}) => { //получает 
    const handleSubmit = (e) => e.preventDefault()//получает событие(е),e.preventDefault-по умолчанию
  
    return (
  <header>
  <form  className="search" onSubmit={handleSubmit}>
  <input
  className="search__input"
  type="text"
  id="search" //получает индификатор поиска
  onChange={handleSearchChange}//при изменении в другую функцию(обработка изменений)
/>
  </form> {/*onSubmit={handleSumbit}-обработать отправку */}
  
  </header>
  )
}

export default SearchBar
