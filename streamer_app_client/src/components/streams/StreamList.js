import { object } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getStreams, deleteStream } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreams();
  }
  renderOwner(stream) {
    if (stream.userId === this.props.currUserId) {
      console.log("found admin");
      return (
        <div>
          <Link
            to={`/stream/delete/${stream.id}`}
            class="ui inverted red button"
          >
            Delete
          </Link>
          <Link
            to={`/stream/edit/${stream.id}`}
            class="ui inverted violet button"
          >
            Edit
          </Link>
        </div>
      );
    }
  }
  renderCreateStream() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/stream/create" className="ui inverted green button">
            Create Streams
          </Link>
        </div>
      );
    }
  }
  renderStreamList() {
    if (!this.props.streams) {
      return <div className="ui active centered inline loader"></div>;
    }
    return this.props.streams.map((stream) => {
      return (
        <div className="item">
          <i class="tv icon ui avatar image"></i>
          <div className="content">
            <Link to={`/stream/${stream.id}`}>
              <div className="header">{stream.title}</div>
            </Link>
            <div className="description">{stream.description}</div>
            {this.renderOwner(stream)}
          </div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props.streams);
    if (this.props.streams.length === 0) {
      return <div className="ui active centered inline loader"></div>;
    }
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui inverted segment">
          <div class="ui inverted middle aligned animated divided list">
            {this.renderStreamList()}
          </div>
          {this.renderCreateStream()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { getStreams, deleteStream })(
  StreamList
);
