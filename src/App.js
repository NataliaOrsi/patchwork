import React from "react";
import NavigationBar from "./NavigationBar";
import Photos from "./Photos";
import './App.css';

function App() {
  return (
    <div className="App">
     <NavigationBar />
     <h1>Trabalhos em Patchwork</h1>
     <h2>por Ivanete de Mesquita Orsi Vieira</h2>
     <Photos />
     <footer>
       <small>This website was coded by Natalia de Mesquita Orsi Vieira and is open-sourced in GitHub</small>
     </footer>
    </div>
  );
}

export default App;
