import React from 'react';
import {Header} from './Header.jsx';
import Home from './Home.jsx';

class App extends React.Component {

    onGreet() {
        alert("Hello there")
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
                        <Header home="Home"/>
                    </div>
                </div>
           { /*<h1 className="text-center">Hello there world</h1>*/}
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home user={user} greet={this.onGreet}><p>This is a paragraph</p></Home>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;