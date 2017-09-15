import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.user.age,
            status: 0,
            homeLink: "Changed Name"
        }; 
        
        this.makeMeOlder = this.makeMeOlder.bind(this);
        console.log("constructor");
    }

    componentWillMount() {
        console.log("component will mount");
    }

    componentDidMount() {
        console.log("component did mount");
    }

    
    componentWillReceiveProps(nextProps) {
        console.log("component will receive props", nextProps);
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.log("should component update", nextProps, nextState);
        /* if (nextState.status === 1) {
            return false;
        } */
        return true;
    }
    

    componentWillUpdate(nextProps, nextState) {
        console.log("component will update", nextProps, nextState);
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("component did update", prevProps, prevState)
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }

    onChangeName() {
        this.props.changeLink(this.state.homeLink);
    }


    onInputTextChange(event) {
        this.setState({
            homeLink: event.target.value
        });
        this.props.changeLink(event.target.value);
    }

    makeMeOlder() {
        this.setState({
            age: this.state.age+3
        });
        console.log(this.state.age);
    }

    render() {
        
        console.log(this.props);
        var ln = <br/>;

        let number = 0;
        let content = "";
        for (let number =0; number < 10; number++) {
            content = <p> Thew number is {number}</p>
        }

        setTimeout(() => {
            this.setState({
                status: this.state.status+1
            });
        }, 3000);
        return(
            <div>
                {content}
                {5 == 3 ? "Yes" : "No"}
                <h3>Your name is {this.props.user.name}</h3>
                <p>your age is {this.state.age} {ln}
                    status = {this.state.status} {ln}
                    <button onClick={this.makeMeOlder}  className="btn btn-success">Make me older</button> {ln}
                    <hr>
                    </hr>
                <button onClick={this.props.greet} className="btn btn-default">Greet</button> {ln}
                    <hr>
                    </hr>
        

                <input type="text" value={this.props.homeLink}  onChange={this.onInputTextChange.bind(this)} />

                <button onClick={() => this.onChangeName()} className="btn btn-primary">Change Name</button>
                    <hr>
                    </hr>

                </p>
                <h5>Hobbies</h5>
                    <ul>
                    {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                {this.props.children}
                
            </div>
        );
    }
}

Home.propTypes = {
    user: PropTypes.object,
    children: PropTypes.element.isRequired,
    greet: PropTypes.func
}

export default Home;