import styled from 'styled-components'

export const DivContainer = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  display: ${props => props.display};
  flex-direction: ${props => props.fd};
  align-items: ${props => props.ai};
  justify-content: ${props => props.jc};
  margin-top: ${props => props.mt}px;
  background-color: ${props => props.bgColor};
  flex-grow: ${props => props.grow};
  flex-wrap: ${props => props.wrap};
  padding: ${props => props.padding};
  margin-right: ${props => props.mr}px;
  margin-left: ${props => props.ml}px;
  margin-top: ${props => props.mt}px;
`
export const VideoDivContainer = styled.div`
  height: 500px;
  width: 100%;
  @media screen and (max-width: 768px) {
    height: 200px;
  }
`
export const UnOrderList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
`
export const Paragraph = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
`
export const Button = styled.button`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  background-color: ${props => props.bgColor};
  border-style: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;
`
export const ContentDivContainer = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
export const ThumbnailDetailsCard = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`
export const ChannelImage = styled.img`
  height: 37px;
  width: 37px;
`
export const ChannelImageDivContainer = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}%;
  display: block;
  flex-direction: ${props => props.fd};
  align-items: ${props => props.ai};
  justify-content: ${props => props.jc};
  margin-top: ${props => props.mt}px;
  background-color: ${props => props.bgColor};
  flex-grow: ${props => props.grow};
  padding: ${props => props.padding}px;
  margin-right: ${props => props.mr}px;
  margin-top: ${props => props.mt}px;
`
