import React from 'react';

export default () => {
  return (
    <div data-test="server-error-component" className="alert alert-danger">
      There was an error retrieving the secret word. Please try again later.
    </div>
  );
};
