import React, {Component} from 'react';
import styles from './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component{

    constructor() {
        // call constructor method on component class i.e. it gives us access to this.state property
        super();
        this.state = {
            // populate the array from component did mount lifecycle method by making an api call to open source json user DB
            monsters: [],
            searchField: ''
        };
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        /* writing code with promise */

        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({ monsters: users }));

        /* writing code with async await */
        const myAsyncFunction = async () => {
            try{
                const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
                const users = await userResponse.json();
                this.setState({monsters: users})
                // const secondUser = user[1];
                // console.log(secondUser);
                // const postResponse = await fetch(
                //     'https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id
                // );
                // const posts = postResponse.json();
                // console.log(posts);
            }catch (e) {
                console.log('there was an error');
            }
        }
        myAsyncFunction().then();
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render(){
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().startsWith(searchField.toLowerCase())
        )
        return(
            <div className={styles.main}>
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder={'search monsters'}
                           handleChange={this.handleChange}/>
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
