import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Style from '../../scss/top.scss'
export default class Quote extends React.Component {
  render() {
    return (
      <div>
      <div className={Style.top}>
        <div className={Style.title}>Goroku</div>
        <nav className={Style.create_form}><Link to="/view/quote-create-form" className={Style.create_btn}>語録を追加する</Link></nav>
        </div>
      <div className={Style.top_d}> </div>
      </div>
    );
  }
}

