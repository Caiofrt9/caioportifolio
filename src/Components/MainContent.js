import React from 'react'
import styled from 'styled-components'
// mport Navigation from './Navigation'i
import Header from './Header/Header'

function MainContent() {
  return (
    <MainContentStyled>
      <Header />
    </MainContentStyled>
  )
}

const MainContentStyled = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 100%;
`
export default MainContent
