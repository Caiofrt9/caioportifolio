import React,{useState} from "react";
import styled from "styled-components";
import { Modal } from "./Modal";

function ViewMore({openModal}) {

  return <ViewMoreStyled>
    <Button onClick={openModal}>I'm a Model</Button>
    
  </ViewMoreStyled>
}

const ViewMoreStyled = styled.div`
display: flex;
justify-content:center ;
align-items: center;
height: 10px;
`

const Button = styled.div`
 
width: max-content;
  display: inline-block;
  background: var(--color-primary);
  padding: 0.75rem 1.2rem;
  border-radius: 0.4rem;
  margin-top: 2rem;
  cursor: pointer;
  border: 1px solid var(--color-primary);
  transition: var(--transition);
`


export default ViewMore