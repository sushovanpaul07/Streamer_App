import React from "react";
import { connect } from "react-redux";
import { editStream, getStream } from "./../../actions";
import * as yup from "yup";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.editStream(formValues);
    console.log("formValues fom edit form", formValues);
  };
  render() {
    return (
      <div>
        <h2>Edit Stream</h2>
        <StreamForm
          initialValues={this.props.stream}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { editStream, getStream })(StreamEdit);
