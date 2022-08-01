import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { actions, originals } from './url'


function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost title='Netfix Originals' url={originals}/>
      <RowPost title='Action' isSmall url={actions}/>
    </div>
    
  );
}

export default App;