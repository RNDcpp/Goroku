import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
export default class Quote extends React.Component {
  render() {
    const tags=this.props.tags.map( e => (<div class="quote-tag">{ e.text }</div>) );
    return (
      <div className="quote">
        <div className="quote-text">
        { this.props.text }
        </div>
        tag:{tags}
      </div>
    );
  }
}

