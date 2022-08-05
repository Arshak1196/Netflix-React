import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { actions, comedy, originals,horror, romance } from './url'


function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost title='Netfix Originals' url={originals}/>
      <RowPost title='Action' isSmall url={actions}/>
      <RowPost title='Comedy' isSmall url={comedy}/>
      <RowPost title='Horror' isSmall url={horror}/>
      <RowPost title='Romance' isSmall url={romance}/>
    </div>
    
  );
}

export default App;