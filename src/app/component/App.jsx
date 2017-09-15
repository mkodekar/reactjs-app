import React from 'react';
import {Header} from './Header.jsx';
import Home from './Home.jsx';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            homeLink: "Home",
            homeMount: true
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

    toggleHomeMounted() {
        this.setState({
            homeMount: !this.state.homeMount
        })
    }

    render() {
        var user = {
            name: "Rehan",
            age: 26,
            hobbies: [
                "Programming", "movies", "Tv shows"
            ]
        };
        
        let homeComponent = "";
        if (this.state.homeMount) {
            homeComponent = (
                <Home 
                user={user} 
                greet={this.onGreet} 
                homeLink={this.state.homeLink} 
                changeLink={this.onChangeLink.bind(this)}
                initialLink={this.state.homeLink}><p>This is a paragraph</p>
                </Home>
            );
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header home={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeComponent}
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                    <button onClick={() => this.toggleHomeMounted()} className="btn btn-primary">Toggle Home Mounted</button>
                    <hr>
                    </hr>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;