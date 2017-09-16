import React from 'react';
import {Header} from './Header.jsx';
import {Home} from './Home.jsx';
import {Root} from './Root.jsx';
import {User} from './User.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {

    render() {
        return(
            <Router>
                <div>
                    <Header />
                    <hr/>

                        <Route exact path={"/"} component={Root}/>
                        <Route path={"/home"} component={Home} />
                        <Route path={"/user"} component={User} />
                </div>
            </Router>
        );
    }
}
export default App;