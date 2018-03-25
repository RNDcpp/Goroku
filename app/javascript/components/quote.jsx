import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Tag from './tag'
import Style from '../../scss/quote.scss'
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class Quote extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    tags: PropTypes.array,
  }
  render() {
    const tags=this.props.tags.map( e => (<div className={Style.quote_tag}>
    <Tag text={e.text} />
    </div>) );
    const tag_texts=this.props.tags.map( e => e.text ).join(" ");
    const text = this.props.text;
    return (
      <div className={Style.quote}>
        <div className={Style.quote_text}>
        { text }
        <div className={Style.copy_wrapper}>
        <CopyToClipboard text={text}>
        <button className={Style.copy_btn}>COPY</button>
        </CopyToClipboard>
        </div>
        </div>
        <div>
        tag:{tags}
        <Link to={`/view/quote-edit-form/${this.props.id}?text=${text}&tags=${tag_texts}`} className={Style.edit_btn} >編集</Link>
        </div>
      </div>
    );
  }
}

