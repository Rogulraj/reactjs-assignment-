import styled from 'styled-components'

export const DivContainer = styled.div`
  height: ${props => props.height};
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
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const Paragraph = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
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
export const BannerContainer = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width};
  display: ${props => props.display};
  flex-direction: ${props => props.fd};
  align-items: ${props => props.ai};
  justify-content: ${props => props.jc};
  margin-top: ${props => props.mt}px;
  background-color: ${props => props.bgColor};
  padding: 50px;

  @media screen and (max-width: 768px) {
    height: 100px;
    padding: 20px;
  }
`

export const IconContainer = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  display: ${props => props.display};
  flex-direction: ${props => props.fd};
  align-items: ${props => props.ai};
  justify-content: ${props => props.jc};
  margin-right: ${props => props.mr}px;
  background-color: ${props => props.bgColor};
  border-radius: ${props => props.radius}px;
  @media screen and (max-width: 768px) {
    height: 60px;
    width: 60px;
  }
`
export const UnOrderList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
  @media screen and (max-width: 566px) {
    margin-left: 20px;
  }
`
export const VideoListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin-right: 15px;
  margin-bottom: 30px;
  height: 250px;
  width: auto;

  @media screen and (max-width: 566px) {
    height: auto;
    flex-direction: column;
  }
`
export const HomeThumbnailImage = styled.img`
  height: 200px;
  width: 350px;
  @media screen and (max-width: 768px) {
    height: 180px;
    width: 300px;
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
  display: none;
  @media screen and (max-width: 566px) {
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
  }
`
export const NoSavedVideoImage = styled.img`
  height: 300px;
  width: 380px;
  @media screen and (max-width: 575px) {
    height: 240px;
    width: 290px;
  }
`
