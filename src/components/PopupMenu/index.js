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
} from './styledComponent'

export default class PopupMenuSidebar extends Component {
  render() {
    const {activeTabId} = this.props

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
                      color={activeTabId === '/' ? '#ff0000' : '#616e7c'}
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
                      color={
                        activeTabId === '/trending' ? '#ff0000' : '#616e7c'
                      }
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
                      color={activeTabId === '/gaming' ? '#ff0000' : '#616e7c'}
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
                        activeTabId === '/saved-videos' ? '#ff0000' : '#616e7c'
                      }
                    />
                    <ListItemText color={theme ? '#ffffff' : '#181818'}>
                      Saved videos
                    </ListItemText>
                  </ListItem>
                </Link>
              </UnOrderList>
            </SidebarContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
