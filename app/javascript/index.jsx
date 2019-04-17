import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import { Provider, connect } from 'react-redux'
import { request } from 'https';
//var request = require('request');


class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        quotes: [],
    };
  }
  componentDidMount() {
    console.log("rewuest");
    const req = request("/quote", res => {
      res.on("data", chunk => {
        let data = JSON.parse(chunk);
        this.setState({"quotes":data.quotes})
        console.log(`BODY: ${data.quotes}`);
      });
      res.on("end", () => {
        console.log("No more data in response.");
      });
    });

    req.on("error", e => {
      console.error(`problem with request: ${e.message}`);
    });

    req.end();
  }
  render() {
    return (
      <div>
        <span>{this.props.fuga}</span>
        {console.log(this.state)}
        {this.state.quotes.map((e)=>{
          return <div>{e.id}:{e.text}</div>}
          )}
        {console.log(this)}_
        <button
          onClick={e => {
            this.props.handleClick();
          }}
        >
          増加
        </button>
      </div>
    );
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
    handleClick: () => {
      let postData = {
         "text": "今日もいい天気",
      };

      let postDataStr = JSON.stringify(postData);
      const options = {
        path: "/quote",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": postDataStr.length
        }
      };

      const req = request(options, res => {
        res.on("data", chunk => {
          console.log(`BODY: ${chunk}`);
        });
        res.on("end", () => {
          console.log("No more data in response.");
        });
      });
      req.on("error", e => {
        console.error(`problem with request: ${e.message}`);
      });
      req.write(postDataStr);
      req.end();
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
