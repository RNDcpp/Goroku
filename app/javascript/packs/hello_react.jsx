// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types'
import Quote from '../components/quote'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Quotes from '../containers/quotes_container'
import QuoteCreateForm from '../containers/form/quote_create_form_container'
import reducer from '../reducers/quotes_reducer'

//const history = createHistory();
//const middleware = routerMiddleware(history);


const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
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
      <Link to="/quote-create-form">Form</Link>
      <Route exact path="/" render={({match})=>{return(<Quotes tag={1} match={match} />);}} />
      <Route path = "/quote-create-form" component={QuoteCreateForm} />
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
