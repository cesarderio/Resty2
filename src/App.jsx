import React, { useState, useEffect, useReducer } from "react";
// import { useState, useEffect } from 'react';

import axios from "axios";

import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";

export const initialState = requestParams;

export const aReducer = ( state = initialState, action) => {
  switch(action.type){
    case 'ADD':
      return {...state, results: [...state.results, action.payload]};
    case: 'DELETE':
      return {...state, results: state.results.filter(char => char !== action.payload)};
    default:
      return state;
  }
};
 
const App = () => {

  const [input, setInput] = useState('');


  const [state, dispatch] = useReducer(aReducer, initialState);
  console.log(state);

  const add = () => {
    let action = {
      type: 'ADD',
      payload: input,
    }
    dispatch(action);
  }

  const remove = () => {
    let action = {
      type: 'DELETE',
      payload: input,
    }
    dispatch(action);
  }


  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [method, setMethod] = useState("get");
  const [loading, setLoading] = useState(false);

  const apiCallOut = (requestParams) => {
    setLoading(true);
    setRequestParams(requestParams);
  };

  useEffect(() => {
    const callApi = async (requestParams) => {
      console.log(requestParams);

      let newData = await axios[method](requestParams.url);
      setData(newData.data);
      setLoading(false);
      setMethod(requestParams.method);
    };

    if (Object.keys(requestParams).length > 0) {
      callApi(requestParams);
    }
    console.log(requestParams);
  }, [requestParams]);

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={apiCallOut} data={setData} method={method} />
      <Results data={data} loading={loading} />
      <Footer />
    </React.Fragment>
  );
};

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//     };
//   }
//   callApi = (requestParams) => {
//     // mock output
//     const data = {
//       count: 2,
//       results: [
//         {name: 'fake thing 1', url: 'http://fakethings.com/1'},
//         {name: 'fake thing 2', url: 'http://fakethings.com/2'},
//       ],
//     };
//     this.setState({data, requestParams});
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }

export default App;
