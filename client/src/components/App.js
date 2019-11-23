import React from 'react';
import { Router, Route } from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelect from './streams/StreamDelect';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';


class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit" exact component={StreamEdit} />
                        <Route path="/streams/delect" exact component={StreamDelect} />
                        <Route path="/Streams/show" exact component={StreamShow} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;