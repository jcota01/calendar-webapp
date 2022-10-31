import React from "react";
import styled, { keyframes } from "styled-components";

export const Grid = styled.div`
    margin-top: 10px;
`;

export const Row = styled.div`
    display: flex;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  width: 100%;
`;


export const Col = styled.div`
  flex: ${props => props.size};
  height: 100%;
`;

export const Box = styled.div`
    background: rgba(${props => props.bColor});
    border-radius: 4px;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const BoxContent = styled.div`
    height: 94%;
    width: 94%;
`;