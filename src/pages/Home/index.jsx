import React from 'react';
import Catalog from '../../components/Catalog';
import getData from '../../services';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
        }
    };

    componentDidMount() {
        getData().then(response => {
            this.setState(
                {name: response.data[0].name});
        })
    };

    render() {
        return(
        <div>
            <Catalog 
            name
            />
            <h1>{this.state.name}</h1>
        </div>)
    }
};


export default Home;