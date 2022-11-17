import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
`

export const SideAndHomeCard = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
`

export const HomeCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const ShowBanner = styled.div`
  display: ${props => props.display};
`

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 35vh;
  width: 100%;
  padding: 20px;
`
export const ImageAndCloseCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const BannerLogoImage = styled.img`
  height: 35px;
  width: 120px;
`
export const Paragraph = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.fs}px;
  font-weight: ${props => props.fw};
  max-width: ${props => props.width}px;
`
export const BannerGetItButton = styled.button`
  height: 46px;
  width: 100px;
  background-color: transparent;
  border-width: 1px;
  border-radius: 2px;
  color: #1e293b;
  font-size: 13px;
  font-weight: 500;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border-style: none;
  margin-top: -40px;
  cursor: pointer;
`
export const HomeVideoCard = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`
export const SearchInputBoxCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const SearchInputBox = styled.input`
  height: 30px;
  width: 400px;
  border-style: solid;
  border-width: 1px;
  border-radius: 0px;
  background-color: transparent;
  border-color: #94a3b8;
  outline-color: #64748b;
  padding: 15px;
  @media screen and (max-width: 768px) {
    max-width: 240px;
  }
`
export const SearchButton = styled.button`
  height: 32px;
  width: 60px;
  background-color: transparent;
  border-width: 1px;
  border-radius: 0px;
  background-color: ${props => props.bgColor};
  border-color: #94a3b8;
  outline: none;
`
export const HomeVideoListCard = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-bottom: 30px;
  height: 300px;
  max-width: 280px;
`
export const HomeThumbnailImage = styled.img`
  height: 170px;
  width: 100%;
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
export const DivContainer = styled.div`
  margin-right: ${props => props.mr}px;
  margin-top: ${props => props.mt}px;
  display: ${props => props.display};
  flex-direction: ${props => props.fd};
  align-items: ${props => props.ai};
  height: ${props => props.height}px;
  width: ${props => props.width}%;
`
export const NoResultImage = styled.img`
  height: 290px;
  width: 330px;
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.fs}px;
  font-weight: ${props => props.fw};
`
export const RetryButton = styled.button`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  background-color: ${props => props.bgColor};
  border-style: none;
  border-radius: 5px;
  color: ${props => props.color};
  font-size: ${props => props.fs}px;
  font-weight: ${props => props.fw};
`
