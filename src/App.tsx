import React from 'react';
import './App.css';
import 'primereact/resources/themes/arya-orange/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Menubar from "./containers/Menubar/Menubar";
import ChmodCalculator from "./containers/ChmodCalculator/ChmodCalculator";

const App = () => <Router>
    <div className="App">
        <Menubar/>
        <Routes>
            <Route path="/" element={<ChmodCalculator />}/>
            <Route path="chmod_calculator" element={<ChmodCalculator />}/>
        </Routes>
    </div>
</Router>

export default App;
