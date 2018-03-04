import Immutable from 'immutable';
import fromJS from 'immutable';

const initialQuotesList = {
  quotes: Immutable.List(),
  tag: 0,
  loading: false,
  next: null
}

const initialState = {
    hoge: "hoge",
    quotes_lists : Immutable.Map(),
}

const expandQuotesList = (state, tag, list) => {
  //console.log(list);
  //console.log(state.quotes_lists.getIn([tag, "quotes"]));
  state.quotes_lists = state.quotes_lists.setIn([tag, "quotes"], Immutable.List([ ...state.quotes_lists.getIn([tag, "quotes"]), ...list]))
                                         .setIn([tag, "loading"], false);
  return state
}

const reducer = (state = initialState, action) => {
  //console.log(action.type);
  //console.log(state.quotes_lists)
  const default_state=state;
  switch (action.type) {
    case 'FETCH_QUOTES': 
    {
      if(state.quotes_lists.getIn([action.tag]) === undefined){
        console.log("state_add");
        console.log(initialQuotesList);
        state.quotes_lists = state.quotes_lists.setIn([action.tag], Immutable.Map(initialQuotesList));
      }
      state.quotes_lists = state.quotes_lists.setIn([action.tag, "loading"], true);
      console.log(state.quotes_lists.getIn([action.tag]))
      return Object.assign({},state);
    }
    case 'EXPAND_QUOTES':
    {
      state.quotes_lists.setIn([action.tag, "loading"], true);
      return Object.assign({},state);
    }
    case 'FETCH_QUOTES_SUCCESS': 
    case 'EXPAND_QUOTES_SUCCESS': 
    {
      console.log(action.quotes_list)
      console.log(action.tag)
      state = expandQuotesList(state, action.tag, action.quotes_list);//TODO .setIn([action.tag,'next'], action.next)
      return Object.assign({},state);
    }
    case 'FETCH_QUOTES_FAILED': 
    case 'EXPAND_QUOTES_FAILED': 
    {
      state.quotes_lists.setIn([action.tag, "loading"], false);
      return Object.assign({},state);
    }
    default: {
      return default_state;
    }
  }
}
export default reducer;