import { useState } from "react"

export const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Tipping the Velvet", author: "Sarah Waters" },
    { title: "Team of Rivals", author: "Doris Kearns Goodwin" }
  ])

  const [newBook, setNewBook] = useState({ title: "", author: "" })

  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setBooks([...books, newBook])
    setNewBook({ title: "", author: "" })
  }
  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <label htmlFor="author">Author: </label>
          <input
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit">Submit book</button>
        </form>
      </div>
      <h3>Book Cards</h3>
      {books.map((book, idx) => (
        <div key={idx} className="bookCardsDiv">
          <h4>
            <em>{book.title}</em> by {book.author}
          </h4>
        </div>
      ))}
    </div>
  )
}
