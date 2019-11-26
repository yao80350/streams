import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelect extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions = () => {
        return (
            <>
                <button onClick={() => { this.props.deleteStream(this.props.match.params.id); }} className="ui primary button">Delete</button>
                <Link to={'/'} className="ui button">Cancel</Link>
            </>
        );
    }

    renderContent = () => {
        let content = "Are you sure you want to delete this stream? ";
        content += this.props.stream ? this.props.stream.title : '';
        return content;
    }

    render() {
        return (
            <Modal 
                onDismiss={() => {history.push('/')}}
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
            />
        ); 
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelect);