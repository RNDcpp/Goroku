import React from 'react'
import { Field, reduxForm } from 'redux-form'
import request from 'superagent'

let CreateForm = props => {
  const { handleSubmit } = props;
  return (
  <form onSubmit = { handleSubmit } > 
    <div>
      <label htmlFor = "text">Text</label>
      <Field name="text" component="input" type="text" />
      <label htmlFor = "tags">Tags</label>
      <Field name="tags" component="input" type="text" />
      <button type="submit">Submit</button>
    </div>
  </form>
  );
};
CreateForm = reduxForm({form: 'createQuote'})(CreateForm);
export default class QuoteCreateForm extends React.Component {
  submit = values => {
    const tags=values.tags.split(" ")
    request.post('/quote')
           .send({text: values.text, tags: tags})
           .set('Content-Type', 'application/json')
           .end(function(err, res) {
             if (err) {
               //TODO
               console.log("Oops");
             } else {
               console.log("OK");
             }
           });
  }
  render(){
    return (
      <h1>TODO: This space is used for Quote Create From
        <CreateForm onSubmit={this.submit} />
      </h1>
    );
  }
}
