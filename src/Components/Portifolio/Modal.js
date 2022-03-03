import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import ReactDOM, { createPortal } from 'react-dom'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalWrapper = styled.div`
  width: 90%;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: var(--color-bg);
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  /* background: #00; */
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #fff;
  p {
    margin-bottom: 2rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }

  .modal__links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 4rem;
  }
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`

export const Modal = ({ showModal, setShowModal, project }) => {
  return ReactDOM.createPortal(
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalImg src={project.image} />
            <ModalContent>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <div className="modal__links">
                <a
                  href="https://github.com/caiofrt9"
                  target="_blank"
                  className="btn"
                >
                  GitHub
                </a>
                <a href="#contact" className="btn btn-primary">
                  See Online
                </a>
              </div>
            </ModalContent>

            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal(prev => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}{' '}
    </>,
    document.getElementById('portal')
  )
}

export default Modal
