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
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
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
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
`

export const VideoListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  margin-bottom: 20px;
  height: 400px;
  max-width: 280px;
  @media screen and (max-width: 575px) {
    height: 300px;
  }
`
export const HomeThumbnailImage = styled.img`
  height: 320px;
  width: 240px;
  @media screen and (max-width: 575px) {
    height: 200px;
    width: 160px;
  }
`
