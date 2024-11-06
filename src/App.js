import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList/BookList';
import AddBook from './components/AddBook/AddBook';
import UpdateBook from './components/UpdateBook/UpdateBook';
import ViewBook from './components/ViewBook/ViewBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BookList/>}></Route>
        <Route path='/add' element={<AddBook/>}></Route>
        <Route path='/edit/:id' element={<UpdateBook/>}></Route>
        <Route path='/view/:id' element={<ViewBook/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
