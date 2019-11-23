import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin = stream => {
        if (this.props.isSignedIn && stream.userId === this.props.currentId) {
            return (
                <div className="floated right content">
                    <button className="ui button primary">Edit</button>
                    <button className="ui button negative">Delect</button>
                </div>
            );
        }
    };

    renderCreate = () => {
        if (!this.props.isSignedIn) {
            return (
                <div style={{ textAlign: "right" }}>
                    <Link to='streams/new' className="ui button primary">Create New Stream</Link>
                </div>
            )
        }
    };

    renderList = () => {
        return  this.props.streams.map( stream => {
                    return (
                        <div className="item" key={stream.id}>
                            <i className="large middle aligned icon camera" />
                            <div className="content">
                                {stream.title}
                                <div className="description">{stream.description}</div>
                            </div>
                            {this.renderAdmin(stream)}
                        </div>
                    );
                });
    };

    render() {
        return (
            <div>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        streams: Object.values(state.streams),
        currentId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);