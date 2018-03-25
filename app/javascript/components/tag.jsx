import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Style from '../../scss/tag.scss'
export default class Tag extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  }
  render() {
    return (
      <div className={Style.tag}>
        <div className="tag-text">
        <Link to={`/view/quotes?&tags=${this.props.text}`}>
           {this.props.text}
        </Link>
        </div>
      </div>
    );
  }
}

