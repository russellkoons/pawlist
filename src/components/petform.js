import React from 'react';
import {Formik, Form, FieldArray, ErrorMessage, Field} from 'formik';
import { PetSchema } from '../schemas';

export class PetForm extends React.Component {
  handleSubmit = (values, actions) => {
    console.log(values);
  }

  render() {
    return(
      <div>
        <h2>New Pet</h2>
        <Formik
          id="new-pet"
          initialValues={{
            name: '',
            type: '',
            birthday: '',
            breed: '',
            color: '',
            weight: '',
            vetName: '',
            phone: '',
            shots: {},
            visits: [],
            pic: ''
          }}
          validationSchema={PetSchema}
          onSubmit={(values, actions) => this.handleSubmit(values, actions)}
          render={({
            values,
            isSubmitting,
            handleChange
          }) => (
            <Form>
              <label htmlFor="name">Name: </label>
              <Field type="text" id="name" />
              <ErrorMessage name="name" />
              <label htmlFor="type">Type of pet: </label>
              <Field type="text" id="type" />
              <label htmlFor="bday">Birthday: </label>
              <Field type="date" id="bday" />
              <label htmlFor="breed">Breed: </label>
              
            </Form>
          )}
        />
      </div>
    )
  }
}