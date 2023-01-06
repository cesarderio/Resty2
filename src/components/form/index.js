import React, { useState } from 'react';

import './form.scss';

const Form = (props) => {

  const { handleApiCall } = props;

  const { method } = props;
  const [jsonData, setJsonData] = useState();
  const [url, setUrl] = useState();
  const updateMethod = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    handleApiCall(formData);
  };

  return (
    <>
      <form data-testid='form-test' onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" onChange={(e) => {
            setUrl(e.target.value);
          }} />
          <button data-testid='form-button' type="submit">GO!</button>
        </label>
        <label>
          <textarea onChange={(e) => setJsonData(e.target.value)}></textarea>
        </label>
        <label className="methods">
          <span id="get" onClick={updateMethod} >GET</span>
          <span id="post" onClick={updateMethod} >POST</span>
          <span id="put" onClick={updateMethod} >PUT</span>
          <span id="delete" onClick={updateMethod} >DELETE</span>
        </label>
      </form>
    </>
  );
};



// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

export default Form;
