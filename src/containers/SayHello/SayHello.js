import React, { Component } from "react";
import Auxilary from "../../hoc/Auxilary/Auxilary";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import classes from "./SayHello.module.css";
import avatar from "../../assets/images/avatar.png";
import Spinner from "../../components/UI/Spinner/Spinner";
class SayHello extends Component {
  state = {
    isSubmitting: false,
  };

  submitHandler = (fields) => {
    this.setState({ isSubmitting: true });
    let template_params = {
      from_name: fields.name,
      from_email: fields.email,
      message_html: fields.description,
    };

    window.emailjs
      .send("gmail", "template_WQmxQ4DJ", template_params)
      .then((res) => {
        this.props.history.push("/success");
      })
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };

  render() {
    let form = (
      <Formik
        initialValues={{
          name: "",
          email: "",
          description: "",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          description: Yup.string().required("Message is required"),
        })}
        onSubmit={(fields) => this.submitHandler(fields)}
        render={({ errors, status, touched }) => (
          <Form>
            <div className={classes.formGroup}>
              <label htmlFor="firstName">Name</label>
              <Field
                name="name"
                type="text"
                className={
                  classes.formControl +
                  (errors.name && touched.name ? " " + classes.Invalid : "")
                }
              />
              <ErrorMessage
                name="name"
                component="div"
                className={classes.invalidFeedback}
              />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="text"
                className={
                  classes.formControl +
                  (errors.email && touched.email ? " " + classes.Invalid : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className={classes.invalidFeedback}
              />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor="description">Message</label>
              <Field
                as="textarea"
                name="description"
                rows="5"
                cols="50"
                className={
                  classes.formControl +
                  (errors.description && touched.description
                    ? " " + classes.Invalid
                    : "")
                }
              />
              <ErrorMessage
                name="description"
                component="div"
                className={classes.invalidFeedback}
              />
            </div>
            <div className={classes.SubmitButtonDiv}>
              <button className={classes.SubmitButton}>Submit</button>
            </div>
          </Form>
        )}
      />
    );
    if (this.state.isSubmitting) {
      form = <Spinner />;
    }
    return (
      <Auxilary>
        <hr className={classes.Line}></hr>
        <div className={classes.ImageContainer}>
          <img src={avatar} className={classes.Avatar}></img>
        </div>
        <div className={classes.Contact}>
          <h1>
            Thanks for taking the time to reach out. How can I help you today?
          </h1>
          <div className={classes.ContactForm}>{form}</div>
        </div>
      </Auxilary>
    );
  }
}

export default SayHello;
