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

const getQuote_lists = (state, props) => {
  console.log(props.tag);
  if(state.quotes.quotes_lists === undefined
    || state.quotes.quotes_lists.getIn([props.tag]) === undefined 
    || state.quotes.quotes_lists.getIn([props.tag,"quotes"]) === undefined){
    return [];
  }else{
    console.log("load");
    return state.quotes.quotes_lists.getIn([props.tag,"quotes"]);
  }
}
const mapStateToProps = (state, props) => {
  const quotes = getQuote_lists(state,props);
  return {
    quotes_list: quotes,
  };
};

const quotesList = (lists) => {
  return lists.map( e => (<Quote id={e.id} key={e.text} text={e.text} tags={e.tags}/>));
}

class Quotes extends React.Component {
  // TODO ここいいかんじになおす
  componentDidMount() {
    console.log("SAFEAF");
    const { dispatch } = this.props;
    const fetch = fetchQuotes();
    console.log(dispatch);
    fetch(dispatch,this.props);
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
