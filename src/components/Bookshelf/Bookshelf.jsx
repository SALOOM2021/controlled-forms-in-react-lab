import { useState } from 'react';
const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState([
        { title: '', author: '' },
    ]);

    const handleChange = (event) => {
        const copyOfBooksObject = { ...newBook, [event.target.name]: event.target.value }
        setNewBook(copyOfBooksObject)

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const addBook = [...books, newBook]
        setBooks(addBook)
        setNewBook({ title: "", author: "" })
    }

    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Title: </label>
                        
                        <input type="text" value={newBook.title} onChange={handleChange} name="title"
                        />
                        <br></br>
                        <label htmlFor="author">Author: </label>
                        
                        <input type="text" value={newBook.author} onChange={handleChange} name="author"
                        />
                        <br></br>
                        <br></br>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="bookCardsDiv">
                    {books.map((book) => (
                        <div className='bookCard'>
                            <h4>Title: {book.title}</h4>
                            <p>Author: {book.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Bookshelf