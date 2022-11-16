//SearchBar страница сообщений панель поиска
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import React from './SearchBar';


const SearchBar = ({posts, setSearchResults}) => { //получает 
    const handleSubmit = (e) => e.preventDefault()//получает событие(е),e.preventDefault-по умолчанию
  
    const handleSearchChange = (e) => { //обработка изменений
        if (!e.target.value) return setSearchResults(posts) //если ввод пуст или стриаем всё что набирала вводе то вернуть набор результата поиска и установить (равным исхлдным сообщениям)

       //массив результатов при поиске сообщений
        const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))//ус-ла сообщения.фильтрую эти сообщения для каждого =>заголовок сообщения метод строки и искать e.target.value и вернёт лог,значение если есть то что на входе поиска то true и будет включён в массив результата, || тоже самое с телом для каждого сообщения

        setSearchResults(resultsArray)//устанавливаю результаты поиска равному массиву результата
    }



    return (
  <header>
  <form  className="search" onSubmit={handleSubmit}>
  <input
  className="search__input"
  type="text"
  id="search" //получает индификатор поиска
  onChange={handleSearchChange}//при изменении в другую функцию(обработка изменений)
/>
<button className="search__button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
  </form> {/*onSubmit={handleSumbit}-обработать отправку */}
  </header>
  )
}

export default SearchBar;
