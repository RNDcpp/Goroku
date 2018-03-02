import React from 'react'
import { Field, reduxForm } from 'redux-form'
let CreateForm = props => {
  const { handleSubmit } = props;
  return (
  <form onSubmit = { handleSubmit } > 
    <div>
      <label htmlFor = "text">Text</label>
      <Field name="text" component="input" type="text" />
      <button type="submit">Submit</button>
    </div>
  </form>
  );
};
CreateForm = reduxForm({form: 'createQuote'})(CreateForm);
export default class QuoteCreateForm extends React.Component {
  submit = values => {
    //TODO 
    console.log(values);
  }
  render(){
    return (
      <h1>TODO: This space is used for Quote Create From
        <CreateForm onSubmit={this.submit} />
      </h1>
    );
  }
}
