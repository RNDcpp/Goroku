import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import request from 'superagent'

let EditForm = props => {
  const { handleSubmit } = props;
  console.log(props.initialValues);
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
EditForm = reduxForm({form: 'editQuote'})(EditForm);
export default class QuoteEditForm extends React.Component {
  static propTypes = {
    initialize: PropTypes.func,
    text: PropTypes.string,
    tags: PropTypes.string,
  }
  submit = values => {
    const tags=values.tags.split(" ")
    request.put('/quote')
           .send({id: this.props.id, text: values.text, tags: tags})
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
      <h1>TODO: This space is used for Quote Edit From
        <EditForm onSubmit={this.submit} initialValues={{text: this.props.text, tags:this.props.tags}}/>
      </h1>
    );
  }
}
