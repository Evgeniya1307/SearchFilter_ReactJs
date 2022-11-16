import {getPosts} from './api/axios';
import {useState, useEffect} from 'react';




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
    <div className="App">
          </div>
  );
}

export default App;
