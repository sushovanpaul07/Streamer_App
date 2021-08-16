import React from "react";
import { streamCreate } from "./../../actions";
import * as yup from "yup";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.streamCreate(formValues);
    console.log(formValues);
  };
  initialValues = {
    title: "",
    description: "",
  };
  render() {
    return (
      <div>
        <h2>Create Stream</h2>
        <StreamForm
          initialValues={this.initialValues}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { title: state.streams.title, description: state.streams.description };
};
export default connect(mapStateToProps, { streamCreate })(StreamCreate);
