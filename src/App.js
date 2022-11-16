import {getPosts} from './api/axios';
import {useState, useEffect} from 'react';
import SearchBar from './SearchBar'; //панель поиска
import ListPage from './ListPage';


function App() {
  const [posts, setPosts] = useState([])//состояние для сообщений и установки сообщений
  const [searchResults, setSearchResults] = useState([])//состояние результаты поиска
  
  
useEffect(()=>{
  getPosts().then(json => {//вызываю getPosts(),будут данные json 
    setPosts(json)//установит сообщения в данные json
    return json
  }).then(json=>{
    setSearchResults(json)
  })
}, [])

  return (
    <>
    <SearchBar posts={posts} setSearchResults={setSearchResults}/>
    <ListPage searchResults={searchResults} />
    </>
  );
}

export default App;
