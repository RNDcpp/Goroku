import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import { Provider, connect } from 'react-redux'

class AppComponent extends React.Component {
  render() {
    return <div>
    <span>{this.props.fuga}</span>
    {console.log(this)}
    <button onClick = {(e)=>{this.props.handleClick()}}>増加</button>
    </div>
  }
}

const initialState = {
  fuga: 0
};

let reducer = (state=initialState,action)=>{
  console.log("call reducer");
  console.log(state);
  console.log(action.type);
  switch(action.type){
    case "INCREMENT":
      console.log("INCREMENT ACTION");
      return {fuga: state.fuga+1};
    default:
      return state;
  }
};

const increment=()=>{
  console.log("increment call");
  return {
    type: "INCREMENT"
  };
};

const MapStateToProps = (state)=>{
  return state
};

const MapDispatchToProps = (dispatch)=>{
  console.log("MapDispatchToProps");
  console.log(dispatch);
  return {
    handleClick: ()=>{
      console.log("handleClick call");
      dispatch(increment());
    }
  };
};
const App = connect(MapStateToProps,MapDispatchToProps)(AppComponent);
let store = createStore(reducer);
console.log(store);
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
