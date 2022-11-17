import {Component} from 'react'
import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import AppContext from '../../context'

import './index.css'

import {
  SidebarContainer,
  UnOrderList,
  ListItem,
  ListItemText,
  Heading,
  Paragraph,
  ContactUsContainer,
  SocialMediaContainer,
  SocialMediaImage,
} from './styledComponent'

export default class Sidebar extends Component {
  render() {
    const {activeTab} = this.props

    return (
      <AppContext.Consumer>
        {value => {
          const {theme} = value

          return (
            <SidebarContainer bgColor={theme ? '#212121' : '#f9f9f9'}>
              <UnOrderList>
                <Link to="/" className="link-card">
                  <ListItem>
                    <AiFillHome
                      size={20}
                      color={activeTab === '/' ? '#ff0000' : '#616e7c'}
                    />
                    <ListItemText color={theme ? '#ffffff' : '#181818'}>
                      Home
                    </ListItemText>
                  </ListItem>
                </Link>
                <Link to="/trending" className="link-card">
                  <ListItem>
                    <HiFire
                      size={20}
                      color={activeTab === '/trending' ? '#ff0000' : '#616e7c'}
                    />
                    <ListItemText color={theme ? '#ffffff' : '#181818'}>
                      Trending
                    </ListItemText>
                  </ListItem>
                </Link>
                <Link to="/gaming" className="link-card">
                  <ListItem>
                    <SiYoutubegaming
                      size={20}
                      color={activeTab === '/gaming' ? '#ff0000' : '#616e7c'}
                    />
                    <ListItemText color={theme ? '#ffffff' : '#181818'}>
                      Gaming
                    </ListItemText>
                  </ListItem>
                </Link>
                <Link to="/saved-videos" className="link-card">
                  <ListItem>
                    <MdPlaylistAdd
                      size={20}
                      color={
                        activeTab === '/saved-videos' ? '#ff0000' : '#616e7c'
                      }
                    />
                    <ListItemText color={theme ? '#ffffff' : '#181818'}>
                      Saved videos
                    </ListItemText>
                  </ListItem>
                </Link>
              </UnOrderList>
              <ContactUsContainer>
                <Paragraph
                  color={theme ? '#ffffff' : '#616e7c'}
                  fs={15}
                  fw={500}
                >
                  CONTACT US
                </Paragraph>
                <SocialMediaContainer>
                  <SocialMediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialMediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialMediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaContainer>
                <Paragraph color="#616e7c" fs={15} fw={500}>
                  Enjoy! Now to see your channels and recommendations!
                </Paragraph>
              </ContactUsContainer>
            </SidebarContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
