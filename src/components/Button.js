import React, { Component } from 'react';
import styled from 'styled-components';


export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Buttonbtn = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.5em 1em;
border: none; 
border-radius: 3px;

background: ${props => props.bluebtn = "#0080FF"};
color: ${props => props.bluebtn ? "white" : "white"};
`;




