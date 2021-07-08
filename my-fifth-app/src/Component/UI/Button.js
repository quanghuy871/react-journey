import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;


  &:hover,
  &:active {
  background-color: #2c0d00;
  
  &:hover .badge,
  &:active .badge {
  background-color: #92320c;
  }
}
`;

// const Button = (props) => {
//   return (
//     <button onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;