import request from 'superagent'

export function fetchQuotes() {
  return (dispatch, props) => {
    dispatch(fetchQuotesRequest(props.tag));
    const url = (props.tag === undefined)?'/quote':`/quote?tags=${props.tag}`
    request.get(url)
      .end(function (err, res) {
        if (err) {
          dispatch(fetchQuotesError(props.tag));
        } else {
          dispatch(fetchQuotesSuccess(props.tag, res.body));
        }
      });
  }
}

//TODO
export function expandQuotes(tag) {
  return {
    type: 'EXPAND_QUOTES',
    tag: tag
  }
}

export function fetchQuotesRequest(tag) {
  return {
    type: 'FETCH_QUOTES',
    tag: tag,
  }
}
export function expandQuotesRequest(tag) {
  return {
    type: 'EXPAND_QUOTES',
    tag: tag,
  }
}
export function fetchQuotesError(tag) {
  return {
    type: 'FETCH_QUOTES_ERROR',
    tag: tag,
  }
}
export function expandQuotesError(tag) {
  return {
    type: 'EXPAND_QUOTES_ERROR',
    tag: tag,
  }
}
export function fetchQuotesSuccess(tag,value) {
  return {
    type: 'FETCH_QUOTES_SUCCESS',
    tag: tag,
    quotes_list: value.quotes,
    next: value.next,
    last_page: value.last_page,
  }
}
export function expandQuotesSuccess(tag,value) {
  return {
    type: 'EXPAND_QUOTES_SUCCESS',
    tag: tag,
    quotes_list: value.quotes,
    next: value.next,
    last_page: value.last_page,
  }
}
