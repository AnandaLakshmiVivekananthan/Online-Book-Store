import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

const title = 'Ikigai'
const author = 'Francesc Miralles'
const img = './images/book1.jpg'

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt={title.toLocaleUpperCase()} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <h4>------------------</h4>
    </article>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<BookList />)
