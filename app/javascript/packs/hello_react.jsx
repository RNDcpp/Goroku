// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types'
import Quote from '../components/quote'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'

import Quotes from '../containers/quotes_container'
import QuoteCreateForm from '../containers/form/quote_create_form_container'
import QuoteEditForm from '../containers/form/quote_edit_form_container'
import quoteReducer  from '../reducers/quotes_reducer'
import { parse } from 'query-string';

//const history = createHistory();
//const middleware = routerMiddleware(history);

const rootReducer = combineReducers({
  quotes: quoteReducer,
  form: formReducer
});

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const Hello = props => (
  <div>
  </div>
);

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}


var Routes = (
  <Router>
    <div>
      <Link to="/">Quote</Link>
      <Link to="/view/quote-create-form">Form</Link>
      <Route exact path="/" render={({match})=>{return(<Quotes tag={1} match={match} />);}} />
      <Route path = "/view/quote-create-form" component={QuoteCreateForm} />
      <Route path = "/view/quote-edit-form/:id" render={({match,location})=>{
        const{id}=match.params;
        const query=parse(location.search);
        const{text,tags} = query;
        console.log(location);
        return (<QuoteEditForm id={id} text={text} tags={tags}/>);}} />
    </div>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      {Routes}
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
