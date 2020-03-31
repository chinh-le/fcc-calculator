import React from 'react';
import { Button } from 'react-bootstrap';

const KeyComponent = (props) => {
  const { value, handler } = { ...props };
  return (
    <Button value={value} onClick={handler} variant="dark">{value}</Button>
  );
};

export default KeyComponent;
