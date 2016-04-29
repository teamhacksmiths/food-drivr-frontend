import React from 'react';
import { Header, Footer } from './reusable-components.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div className='container'>
            	<Header />
              	{this.props.children}
                <Footer />
            </div>
        )
    }
}

module.exports = App;
