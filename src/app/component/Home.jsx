import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.user.age 
        }; 
        this.makeMeOlder = this.makeMeOlder.bind(this);
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
        return(
            <div>
                {content}
                {5 == 3 ? "Yes" : "No"}
                <h3>Your name is {this.props.user.name}</h3>
                <p>your age is {this.state.age} {ln}
                </p>
                <h5>Hobbies</h5>
                    <ul>
                    {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                {this.props.children}
                <button onClick={this.makeMeOlder.bind(this)}  className="btn btn-success">Make me older</button>
            </div>
        );
    }
}

Home.propTypes = {
    user: PropTypes.object,
    children: PropTypes.element.isRequired
}

export default Home;