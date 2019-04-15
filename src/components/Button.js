import React from "react";
import styled, { css } from 'styled-components'

const Button = styled.button`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  height: 58px;
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  padding: 0 15px;
  color: #fff;
  display: inline-block;
  text-decoration: none;
  white-space: nowrap;
  background-color: #1E1E1E;
  background-image: linear-gradient(#3B3B3B, #1E1E1E), linear-gradient(to left, rgba(255, 255, 255, 0.5), #000000);
  background-blend-mode: normal, multiply;
  border-radius: 3px;
  border: 1px solid #000;
  cursor: pointer;
  transition: background-color 0.4s linear;
  &:hover,
  &:focus {
    background: none;
    background-color: rgba(0,0,0,0.8);
    border-color: rgba(0,0,0,0.9);
    box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  }
  ${props => props.secondary && css`
    background-color: #DAD4C2;
    background-image: linear-gradient(#EBE8DF, #DAD4C2), linear-gradient(to left, rgba(255, 255, 255, 0.5), #EBE8DF);
    border: solid 1px #DAD4C2;
    color: #3b3b3b;
    &:hover,
    &:focus {
      background-color: #EBE8DF;
      box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.25);
      border: solid 1px #DAD4C2;
      background-image: none;
    }
  `}
  ${props => props.give && css`
    background-color: #CE2A31;
    background-image: linear-gradient(#EF3340, #CE2A31), linear-gradient(to left, rgba(255, 255, 255, 0.5), #EF3340);
    border: solid 1px #EF3340;
    &:hover,
    &:focus {
      background-color: #ef3340;
      box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.25);
      border: solid 1px #ef3340;
      background-image: none;
    }
  `}
  ${props => props.card && css`
    background-color: transparent;
    background-image: none;
    color: #000;
    text-transform: uppercase;
    height: auto;
    border: none;
    border-bottom: 1px solid #000;
    border-radius: 0;
    line-height: 1;
    padding: 0;
    font-weight: 400;
    height: 40px;
    font-size: 0.8125rem;
    letter-spacing: 3px;
    transition: opacity 0.4s;
    &:hover,
    &:focus {
      box-shadow: none;
      border-color: rgba(0,0,0,0.6);
      opacity: 0.6;
      background-color: transparent;
      background-image: none;
    }
  `}
  ${props => props.giveCard && css`
    background-color: transparent;
    background-image: none;
    color: #ce2a31;
    height: auto;
    border: none;
    border-bottom: 1px solid #ce2a31;
    border-radius: 0;
    line-height: 1;
    padding: 0;
    font-weight: 400;
    height: 40px;
    font-size: 0.8125rem;
    letter-spacing: 3px;
    transition: all 0.4s;
    &:hover,
    &:focus {
      box-shadow: none;
      border-color: rgba(206,42,49,0.6);
      opacity: 0.6;
      background-color: transparent;
      background-image: none;
    }
  `}
`
export default Button;
