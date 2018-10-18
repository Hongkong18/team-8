import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Card from './Card';
// import SearchBar from 'material-ui-search-bar'

import SearchField from "react-search-field" ;



export default class App extends React.Component{


    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
        };
      }


    onSearchClick(doctor_name){
        
        fetch(`http://localhost:8080/api/search?docname=AU%20MING%20KAI&loc=Kowloon`)
        .then(
            results => 
               results.json()
            
        ).then(data => {
        console.log(data.data);
            this.setState({ data:data.data })
        })


        
    }

    render() {
        let cards = this.state.data.map(d => (<Card name={d.Name}
        phone={d.Contact[0]} address={d.Address}/>))
        return(
            <div>
            <SearchField
            placeholder="Search..."
            // onChange={onChange}
            onEnter={this.onSearchClick.bind(this)}
            onSearchClick={this.onSearchClick.bind(this)}
            searchText="This is initial search text"
            classNames="test-class"
            />
            <br /><br />
            {cards}
            </div>
        )   
    }
}