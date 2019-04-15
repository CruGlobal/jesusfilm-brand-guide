import React from "react";
import styled, { css } from 'styled-components'

const Colored = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 3px;
  margin-bottom: 10px;
  ${props => props.primaryRed && css`
    background-color: #ef3340;
  `}
  ${props => props.neutralBeige && css`
    background-color: #DAD4C2;
  `}
  ${props => props.neutralGray && css`
    background-color: #d8d8d8;
  `}
  ${props => props.secondaryRed1 && css`
    background-color: #f8485e;
  `}
  ${props => props.secondaryRed2 && css`
    background-color: #cb333b;
  `}
  ${props => props.secondaryRed3 && css`
    background-color: #a4343a;
  `}
  ${props => props.secondaryRed4 && css`
    background-color: #643335;
  `}
`

const Color = ({descriptionList, ...props}) => (
  <div>
    <Colored {...props} />
    {descriptionList ? descriptionList.map((description) => (
      <React.Fragment>{description}<br /></React.Fragment>
    )) : null}
  </div>
)



export default Color;
