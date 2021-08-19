import React from "react";
import { connect } from "react-redux";
import { getStream } from "../../actions";
import flv from "flv.js";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
    this.buildPlayer();
  }
  componentDidUpdate() {
    this.buildPlayer();
  }
  componentWillUnmount() {
    this.flvPlayer.destroy();
  }
  buildPlayer() {
    if (this.flvPlayer || !this.props.stream) {
      return;
    }
    this.flvPlayer = flv.createPlayer({
      type: "flv",
      url: "http://localhost:8000/live/stream.flv",
    });
    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();
  }
  render() {
    if (!this.props.stream) {
      return <div className="ui active centered inline loader"></div>;
    }
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h2>{this.props.stream.title}</h2>
        <h5>{this.props.stream.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { getStream })(StreamShow);
