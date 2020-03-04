import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <>
                <Link to={'/'}>Home</Link>
                <Switch>
                    <Route exact path={'/'}>
                        <Home/>
                    </Route>
                </Switch>
            </>
        );
    }
}

ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));
