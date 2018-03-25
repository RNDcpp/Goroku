import React from 'react'
import { Field, reduxForm } from 'redux-form'
import request from 'superagent'
import Style from '../../../scss/form.scss'
let CreateForm = props => {
  const { handleSubmit } = props;
  return (
  <div className={Style.form_wrapper}>
  <form onSubmit = { handleSubmit } > 
    <div>
      <div className={Style.row}>
      <div className={Style.col}>
      <label htmlFor = "text">Text</label>
      </div>
      <div className={Style.col}>
      <Field name="text" component="textarea" type="text" className={Style.text_input} placeholder="今日もいい天気"/>
      </div>
      </div>
      <div className={Style.row}>
      <div className={Style.col}>
      <label htmlFor = "tags">Tags</label>
      </div>
      <div className={Style.col}>
      <Field name="tags" component="input" type="text" className={Style.tag_input}　placeholder="クッキー☆　例のアレ"/>
      </div>
      </div>
      <div className={Style.row_right}>
      <button type="submit" className={Style.submit_btn}>Submit</button>
      </div>
    </div>
  </form>
  </div>
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
        <CreateForm onSubmit={this.submit} />
    );
  }
}
