import React from 'react';
import 'flexboxgrid'
import 'denali-css/css/denali-dark-theme.css'
import 'denali-css/css/denali.css'
import 'denali-icon-font/dist/denali-icon-font.css'
import Table from "./Components/Table/Table"
import './App.css';


export default class App extends React.Component {

    render() {
        return (
            <div >
                <Table/>
            </div>
        )
    }
}


