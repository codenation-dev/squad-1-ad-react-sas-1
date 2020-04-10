import React from 'react';
import Catalog from '../../components/Catalog';

class Home extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return(
        <div>
            <Catalog />
        </div>)
    }
};

export default Home;