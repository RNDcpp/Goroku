import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default class Quote extends React.Component {
  render() {
    const tags=this.props.tags.map( e => (<div className="quote-tag">{ e.text }</div>) );
    const tag_texts=this.props.tags.map( e => e.text ).join(" ");
    const text = this.props.text;
    return (
      <div className="quote">
        <div className="quote-text">
        { text }
        </div>
        tag:{tags}
      <Link to={`/view/quote-edit-form/${this.props.id}?text=${text}&tags=${tag_texts}`}>Edit</Link>
      </div>
    );
  }
}

