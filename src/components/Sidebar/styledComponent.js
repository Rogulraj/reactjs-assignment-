import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    width: 240px;
    background-color: ${props => props.bgColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    flex-grow: 0;
    flex-shrink: 0;
  }
`

export const UnOrderList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
`
export const ListItem = styled.li`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ListItemText = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-weight: 400;
  padding-left: 15px;
`
export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.fs}px;
  font-weight: ${props => props.fw};
`
export const Paragraph = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.fs}px;
  font-weight: ${props => props.fw};
`
export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const SocialMediaImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 15px;
`
