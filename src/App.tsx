import React from 'react';
import './App.css';
import 'primereact/resources/themes/arya-orange/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
import Menubar from "./containers/Menubar/Menubar";

const App = () => (
    <div className="App">
        <Menubar/>
    </div>
  )

export default App;
