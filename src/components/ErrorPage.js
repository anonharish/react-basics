import React from 'react'
import {useRouteError} from 'react-router-dom';

const ErrorPage = () => {
    const error=useRouteError();
  return (
    <>
      <div>ErrorPage</div>
      <h2>Error Info: {error.status}</h2>
    </>
  );
}

export default ErrorPage;