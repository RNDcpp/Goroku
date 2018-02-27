// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Quote from '../components/quote'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Quotes from '../containers/quotes_container'
import reducer from '../reducers/quotes_reducer'

//TODO const history = createHistory()
//TODO const middleware = routerMiddleware(history)

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const Hello = props => (
  <div>
  </div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Quotes tag={1} />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
