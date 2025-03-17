
import { useState } from 'react'
import Button from 'react-bootstrap/Button';

function TypesExample() {
const [nombre, func] = useState('click me'); 

  return (
    <>
    <Button variant="primary" onClick={() => func('clicked')}>{nombre}</Button>

    </>
  );
}

export default TypesExample;