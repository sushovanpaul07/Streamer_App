import React from "react";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import history from "../../history";
import { connect } from "react-redux";
import { getStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }
  renderActions() {
    return (
      <>
        <Link to={`/`} className="ui black deny button">
          Nope
        </Link>

        <button
          onClick={() => {
            this.props.deleteStream(this.props.match.params.id);
            history.push("/");
          }}
          className="ui positive right labeled icon button"
        >
          Delete
          <i className="checkmark icon"></i>
        </button>
      </>
    );
  }
  streamToDelete() {
    if (!this.props.stream) {
      return <div></div>;
    }
    return (
      <div className="ui icon message">
        <i className="inbox icon"></i>
        <div className="content">
          <div className="header">{this.props.stream.title}</div>
          <p>{this.props.stream.description}</p>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content="Do you want to delete this Stream"
          clickCallback={() => {
            history.push("/");
          }}
          actions={this.renderActions()}
          metaData={this.streamToDelete()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { getStream, deleteStream })(
  StreamDelete
);
