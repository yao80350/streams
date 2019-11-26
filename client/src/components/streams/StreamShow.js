import React from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';

import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
        this.renderPlayer();
    }

    componentDidUpdate() {
        this.renderPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    renderPlayer() {
        if (this.player || !this.props.stream) {
            return;
        }
        const id = this.props.match.params.id;
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://loaclhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }
        return (
            <div className="container">
                <video ref={this.videoRef} controls />
                <div>{this.props.stream.title}</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);