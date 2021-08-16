import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

class StreamForm extends React.Component {
  validationSchema = yup.object({
    title: yup.string().required("Required"),
    description: yup.string().required("Required"),
  });
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
    console.log("formValues==>", formValues);
  };
  render() {
    return (
      <Formik
        initialValues={this.props.initialValues}
        validationSchema={this.validationSchema}
        onSubmit={this.onSubmit}
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

export default StreamForm;
