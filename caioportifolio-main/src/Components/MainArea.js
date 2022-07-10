import React from 'react'
import styled from 'styled-components'
import business from '../img/marketing.mp4'

import MainContent from './MainContent'

function MainArea() {
  return (
    <MainAreaStyled>
      <video src={business} muted playsInline autoPlay loop></video>

      <MainContent />
    </MainAreaStyled>
  )
}

const MainAreaStyled = styled.div`
  width: 100%;
  height: 85vh;
  overflow: hidden;

  video {
    position: absolute; /*  absolute ou fixed */
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: 0.7;
  }

  @media screen and (max-width: 1100px) {
  }
`

export default MainArea
