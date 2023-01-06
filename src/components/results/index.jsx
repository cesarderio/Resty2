import React from 'react';
import JsonFormatter from 'react-json-formatter';

import './styles.scss'

const Results = (props) => {

  const { data, loading } = props;
  let newData = JSON.stringify(data);

  const jsonStyling = {
    stringStyle: { color: 'black'},
    propertyStyle: { color: 'gray'},
    numberStyle: { color: 'peach'}
  };

  return(
    <>
    <section>
      {loading ? (
        <pre>loading...</pre>
      ) : (

        <pre data-testid='result-data'>
      <JsonFormatter json={newData} jsonStyling={jsonStyling} />
    </pre>
      )}
  </section>
  </>
  )
}

export default Results;

