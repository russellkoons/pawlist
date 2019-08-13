import React from 'react';
import {Formik, Form, FieldArray, ErrorMessage, Field} from 'formik';
import {EventSchema} from '../schemas';

export default class EventForm extends React.Component {
  handleSubmit = (values, actions) => {
    console.log(values);
  }

  render() {
    return(
      <div>
        <h2>New Event</h2>
        <Formik 
          id="new-event"
          initialValues={{
            name: '',
            date: '',
            pets: [''],
            info: {},
            frequency: ''
          }}
          validationSchema={EventSchema}
          onSubmit={(values, actions) => this.handleSubmit(values, actions)}
          render={({
            values,
            isSubmitting
          }) => (
            <Form>
              <label htmlFor="name">Name: </label>
              <Field type="text" id="name" />
              <ErrorMessage name="name" />
              <label htmlFor="date">Date: </label>
              <Field type="date" id="date" name="date" />
              <ErrorMessage name="date" />
              <label htmlFor="pets">Pets: </label>
              <Field type="text" id="pets" name="pets" />
              <label htmlFor="location">Location: </label>
              <Field type="text" id="location" />
              <label htmlFor="desc">Description: </label>
              <Field type="text" id="desc" />
              <label htmlFor="freq">Frequency: </label>
              <Field type="text" id="freq" />
            </Form>
          )}
        />
      </div>
    )
  }
}