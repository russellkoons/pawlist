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
              
            </Form>
          )}
        />
      </div>
    )
  }
}