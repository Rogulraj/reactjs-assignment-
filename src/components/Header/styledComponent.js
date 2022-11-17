import styled from 'styled-components'
import Popup from 'reactjs-popup'

export const NavContainer = styled.nav`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  padding: 10px;
  @media screen and (min-width: 768px) {
    height: 70px;
    width: 100%;
    padding: 20px;
  }
`
export const HeaderWebsite = styled.img`
  height: 25px;
  width: 100px;

  @media screen and (min-width: 768px) {
    height: 30px;
    width: 110px;
  }
`
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
  margin-right: ${props => props.mr};
  margin-left: ${props => props.ml};
  margin-top: ${props => props.mt};
`
export const UnOrderList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ListItem = styled.li`
  margin: 5px;
  @media screen and (min-width: 768px) {
    margin: 10px;
  }
`
export const BiMenuListItem = styled.li`
  margin: 5px;
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavButton = styled.button`
  background-color: transparent;
  border-style: none;
`
export const NavProfileImageList = styled.li`
  margin: 10px;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const ProfileImage = styled.img`
  height: 27px;
  width: 27px;
`
export const LogoutListItem = styled.li`
  margin: 5px;
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutButtonListItem = styled.li`
  margin: 10px;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`
export const LogoutButton = styled.button`
  height: 25px;
  width: 70px;
  background-color: transparent;
  border-color: ${props => props.borderColor};
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  color: ${props => props.color};
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
`
export const PopupButton = styled.button`
  height: 35px;
  width: 90px;
  color: ${props => props.color};
  font-size: 15px;
  font-weight: 500;
  background-color: ${props => props.bgColor};
  border-style: ${props => (props.borderStyle ? 'solid' : 'none')};
  border-radius: 7px;
  border-width: 1px;
  margin: 15px;
  border-color: ${props => props.borderColor};
  cursor: pointer;
`
export const Paragraph = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  text-align: center;
`
export const StyledPopup = styled(Popup)`
  &-content {
    height: 200px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: ${props => props.bgColor};
  }
  &-overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const MenuStyledPopup = styled(Popup)`
  &-content {
    height: 330px;
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: ${props => props.bgColor};
  }
  &-overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }
`
