import React from 'react';
import {render} from 'react-dom';
import Header from './component/Header.jsx';
import Home from './component/Home.jsx';


class App extends React.Component {
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
                        <Header />
                    </div>
                </div>
           { /*<h1 className="text-center">Hello there world</h1>*/}
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home user={user}><p>This is a paragraph</p></Home>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById("app"));