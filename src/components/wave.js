import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: red;
  border: none;
  color: white;
  font-size: 25px;
`;
const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `${waves} ${waves === 1 ? 'wave' : 'waves'}`;

  return <Button onClick={() => setWaves(waves + 1)}>{label}</Button>;
};

export default Wave;
