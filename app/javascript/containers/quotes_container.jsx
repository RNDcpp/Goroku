import {
  connect,
} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Quote from '../components/quote'
import ReactScrollableList from 'react-scrollable-list'
import Immutable from 'immutable'
import fromJS from 'immutable'
import {
  fetchQuotes,
  expandQuotes,
} from './../actions/quotes_actions'

const mapStateToProps = (state, props) => {
  let quotes=[];
  let last_page=false;
  let next=null;
  console.log(state.quotes.quotes_lists.getIn([props.tag]));
  if(!(state.quotes.quotes_lists === undefined) && !(state.quotes.quotes_lists.getIn([props.tag]) === undefined) ){
    console.log("getgetget");
    quotes = state.quotes.quotes_lists.getIn([props.tag,"quotes"]);
    last_page = state.quotes.quotes_lists.getIn([props.tag,"last_page"]);
    next = state.quotes.quotes_lists.getIn([props.tag,"next"]);
   }
  return {
    quotes_list: quotes,
    last_page: last_page
  };
};

const quotesList = (lists) => {
  return lists.map( e => (<Quote id={e.id} key={e.text} text={e.text} tags={e.tags}/>));
}

class Quotes extends React.Component {
  static propTypes = {
    quotes_list: PropTypes.array,
    last_page: PropTypes.bool,
    next: PropTypes.string,
  };
  // TODO ここいいかんじになおす
  componentDidMount() {
    console.log("SAFEAF");
    const { dispatch } = this.props;
    const fetch = fetchQuotes();
    console.log(dispatch);
    if(!this.props.last_page){
      fetch(dispatch,this.props);
    }
  }
  render() {
    console.log("render")
    console.log(this.props.quotes_list);
    let items=quotesList(this.props.quotes_list);
    return (
      <div>{items}</div>
    );
  }
}
export default connect(mapStateToProps)(Quotes)
