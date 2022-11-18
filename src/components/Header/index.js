import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {BiMenu} from 'react-icons/bi'
import {IoClose} from 'react-icons/io5'

import PopupMenuSidebar from '../PopupMenu'

import AppContext from '../../context'

import {
  NavContainer,
  HeaderWebsite,
  DivContainer,
  UnOrderList,
  ListItem,
  BiMenuListItem,
  NavButton,
  NavProfileImageList,
  ProfileImage,
  LogoutListItem,
  LogoutButtonListItem,
  LogoutButton,
  PopupButton,
  Paragraph,
  StyledPopup,
  MenuStyledPopup,
} from './styledComponent'

class Header extends Component {
  logoutTriggered = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {history} = this.props
    const {pathname} = history.location

    return (
      <AppContext.Consumer>
        {value => {
          const {theme, onChangeTheme} = value

          const LogoutPopup = details => (
            <DivContainer>
              <StyledPopup
                modal
                trigger={details}
                bgColor={theme ? '#000000' : '#ffffff'}
              >
                {close => (
                  <DivContainer>
                    <Paragraph
                      fs="15px"
                      fw="400"
                      color={theme ? '#ffffff' : '#00306e'}
                    >
                      Are you sure, you want to logout
                    </Paragraph>
                    <DivContainer display="flex" fd="row" ai="center">
                      <PopupButton
                        type="button"
                        borderStyle
                        borderColor="#94a3b8"
                        color="#94a3b8"
                        bgColor="transparent"
                        onClick={() => close()}
                      >
                        Cancel
                      </PopupButton>
                      <PopupButton
                        type="button"
                        color="#ffffff"
                        bgColor="#3b82f6"
                        onClick={this.logoutTriggered}
                      >
                        Confirm
                      </PopupButton>
                    </DivContainer>
                  </DivContainer>
                )}
              </StyledPopup>
            </DivContainer>
          )

          const menuPopup = () => (
            <DivContainer>
              <MenuStyledPopup
                modal
                trigger={
                  <NavButton type="button">
                    <BiMenu size={18} color={theme ? '#ffffff' : '#000000'} />
                  </NavButton>
                }
                bgColor={theme ? '#000000' : '#ffffff'}
              >
                {close => (
                  <DivContainer>
                    <DivContainer ml="98%" mt="7px">
                      <IoClose
                        color={theme ? '#ffffff' : '#000000'}
                        size={20}
                        onClick={() => close()}
                      />
                    </DivContainer>
                    <DivContainer>
                      <PopupMenuSidebar activeTabId={pathname} />
                    </DivContainer>
                  </DivContainer>
                )}
              </MenuStyledPopup>
            </DivContainer>
          )

          return (
            <NavContainer bgColor={theme ? '#212121' : '#f9f9f9'}>
              <DivContainer>
                <Link to="/">
                  <HeaderWebsite
                    src={
                      theme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                </Link>
              </DivContainer>
              <DivContainer>
                <UnOrderList>
                  <ListItem>
                    <NavButton
                      type="button"
                      onClick={onChangeTheme}
                      data-testid="theme"
                    >
                      {theme ? (
                        <FiSun color="#ffffff" size={20} />
                      ) : (
                        <FaMoon size={20} />
                      )}
                    </NavButton>
                  </ListItem>
                  <BiMenuListItem>{menuPopup()}</BiMenuListItem>
                  <NavProfileImageList>
                    <ProfileImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </NavProfileImageList>
                  <LogoutListItem>
                    {LogoutPopup(
                      <NavButton type="button">
                        <FiLogOut
                          size={20}
                          color={theme ? '#ffffff' : '#000000'}
                        />
                      </NavButton>,
                    )}
                  </LogoutListItem>
                  <LogoutButtonListItem>
                    {LogoutPopup(
                      <LogoutButton
                        type="button"
                        color={theme ? '#ffffff' : '#3b82f6'}
                        borderColor={theme ? '#ffffff' : '#3b82f6'}
                      >
                        Logout
                      </LogoutButton>,
                    )}
                  </LogoutButtonListItem>
                </UnOrderList>
              </DivContainer>
            </NavContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default withRouter(Header)
