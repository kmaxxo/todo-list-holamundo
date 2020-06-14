import React from 'react';
import NavHeader from './components/NavHeader'
import ToDoList from './components/ToDoList/ToDoList'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <NavHeader />
      <ToDoList />
      <Footer />
    </>
  )
}

export default App;

