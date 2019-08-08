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
              
            </Form>
          )}
        />
      </div>
    )
  }
}