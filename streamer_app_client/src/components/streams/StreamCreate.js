import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { streamCreate } from "./../../actions";
import * as yup from "yup";

class StreamCreate extends React.Component {
  render() {
    const validationSchema = yup.object({
      title: yup.string().required("Required"),
      description: yup.string().required("Required"),
    });
    const onSubmit = (formValues) => {
      this.props.streamCreate(formValues.title, formValues.description);
      console.log(formValues);
    };
    var initialValues = {
      title: "",
      description: "",
    };
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="ui form">
          <label htmlFor="name">Title</label>
          <div className="ui container">
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" />
          </div>

          <label htmlFor="description">Description</label>
          <div className="ui container">
            <Field type="text" id="description" name="description" />
            <ErrorMessage name="description" />
          </div>
          <div className="ui container">
            <button className="ui button primary" type="submit">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    );
  }
}

const mapStateToProps = (state) => {
  return { title: state.form.title, description: state.form.description };
};
export default connect(mapStateToProps, { streamCreate })(StreamCreate);
