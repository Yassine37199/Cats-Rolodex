import {React , Component} from "react";

import './App.css';

import {CardList} from './components/card-list/card-list.component';

import {SearchBox} from './components/search-box/search-box.component';


class App extends Component {
  constructor(){
  super();
  this.state = {
    cats : [],
    searchtext : ''
  }
}

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({
      cats : users
    }))
  }

  handleChange = e => {
    this.setState({searchtext : e.target.value })
  }


  render() {
    const {cats , searchtext} = this.state;
    const filteredCats = cats.filter(cat => 
      cat.name.toLowerCase().includes(searchtext.toLowerCase()) )

    return (
      <div className="App">
      <h1>Cats Rolodex</h1>
      <SearchBox placeholder='search cat' handleChange={this.handleChange}/>
      <CardList cats={filteredCats}/>
      </div>
  );
}
}

export default App;
