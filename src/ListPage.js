import React from 'react'
import Post from './Post'

//страница списка

const ListPage = ({searchResults}) => { //результат поиска
  
    //определяю результат
    const results = searchResults.map(post => <Post key={post.id} post={post} />)//результат поиска.map сопоставляю результаты поиска(post=>для каждого поста)использую Пост ему key, и пост раным сообщению
    //определяю контент для страницы 
    const content = results?.length ? results : <article><p>Нет соответствующих сообщений</p></article>//проверяю длину результата чтобы увидеть есть ли какие результаты если есть то ссылка на массив результатов если нет то отображу другую статью
  
    return (
        <main>{content}</main>
  )
}

export default ListPage
