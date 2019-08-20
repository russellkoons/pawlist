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
              <Field type="text" id="breed" />
              <label htmlFor="color">Color: </label>
              <Field type="text" id="color" />
              <label htmlFor="weight"> Weight: </label>
              <Field type="number" id="weight" />
              <label htmlFor="vet">Vet Name: </label>
              <Field type="text" id="vet" />
              <label htmlFor="vet-no">Phone Number: </label>
              <Field type="text" id="vet-no" />
              <legend>Shots</legend>
              <FieldArray type="text" name="shots" render={arrayHelpers => (
                <div>
                  {values.shots && values.shots.length > 0 ? (
                    values.shots.map((shot, index) => (
                      <div key={index}>
                        <Field name={'shots-' + index} />
                        <input
                          type="button"
                          onClick={() => arrayHelpers.push('')}
                        >
                          +
                        </input>
                        <input
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          -
                        </input>
                      </div>
                    ))
                  ) : (
                    <input type="button" onClick={() => arrayHelpers.push('')}>
                      Add ingredient
                    </input>
                  )}
                </div>
              )} /><br/>
            </Form>
          )}
        />
      </div>
    )
  }
}