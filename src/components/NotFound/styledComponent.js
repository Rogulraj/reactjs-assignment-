import styled from 'styled-components'

export const DivContainer = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}%;
  display: ${props => props.display};
  flex-direction: ${props => props.fd};
  align-items: ${props => props.ai};
  justify-content: ${props => props.jc};
  margin-top: ${props => props.mt}px;
  background-color: ${props => props.bgColor};
  flex-grow: ${props => props.grow};
  padding: ${props => props.padding}px;
  margin-right: ${props => props.mr}px;
  margin-left: ${props => props.ml}px;
  margin-top: ${props => props.mt}px;
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: 30px;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const Paragraph = styled.p`
  color: ${props => props.color};
  font-size: 17px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`
export const Image = styled.img`
  height: 320px;
  width: 350px;
  @media screen and (max-width: 768px) {
    height: 200px;
    width: 200px;
  }
`
