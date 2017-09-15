import React from 'react';
import {Header} from './Header.jsx';
import Home from './Home.jsx';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            homeLink: "Home"
        }
    }

    onGreet() {
        alert("Hello there")
    }

    onChangeLink(newName) {
        this.setState({
            homeLink: newName
        });
    }

    render() {
        var user = {
            name: "Rehan",
            age: 26,
            hobbies: [
                "Programming", "movies", "Tv shows"
            ]
        };
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header home={this.state.homeLink}/>
                    </div>
                </div>
           { /*<h1 className="text-center">Hello there world</h1>*/}
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home user={user} greet={this.onGreet} changeLink={this.onChangeLink.bind(this)}><p>This is a paragraph</p></Home>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;