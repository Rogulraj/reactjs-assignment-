import styled from 'styled-components'

export const DivContainer = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}%;
  display: ${props => props.display};
  flex-direction: ${props => props.fd};
  align-items: ${props => props.ai};
  justify-content: ${props => props.jc};
  margin-top: ${props => props.mt}px;
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
`

export const Paragraph = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
`
export const Image = styled.img`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`
export const Button = styled.button`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
  background-color: ${props => props.bgColor};
  border-style: none;
  border-radius: 5px;
  cursor: pointer;
`
