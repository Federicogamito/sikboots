import React from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer id={3} />
    </>
  );
}