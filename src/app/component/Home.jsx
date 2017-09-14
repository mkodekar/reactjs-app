import React from 'react';

class Home extends React.Component {
    render() {

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
            </div>
        );
    }
}

export default Home;