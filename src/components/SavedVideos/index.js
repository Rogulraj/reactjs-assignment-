import {Component} from 'react'

import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {MdPlaylistAdd} from 'react-icons/md'

import AppContext from '../../context'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  DivContainer,
  Heading,
  Paragraph,
  BannerContainer,
  IconContainer,
  VideoListItem,
  ThumbnailDetailsCard,
  HomeThumbnailImage,
  ChannelImage,
  UnOrderList,
  ChannelImageDivContainer,
  NoSavedVideoImage,
} from './styledComponent'

export default class SavedVideo extends Component {
  render() {
    const {match} = this.props
    const {path} = match
    return (
      <AppContext.Consumer>
        {value => {
          const {theme, savedVideos} = value

          const savedVideoSuccess = () => {
            const videoDetails = details => {
              const {
                channel,
                id,
                publishedAt,
                thumbnailUrl,
                title,
                viewCount,
              } = details
              const {name, profileImageUrl} = channel

              const dateSoFar = formatDistanceToNow(
                new Date(publishedAt),
              ).split(' ')

              return (
                <Link to={`/videos/${id}`} key={id} className="video-link-card">
                  <VideoListItem>
                    <HomeThumbnailImage
                      src={thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <ThumbnailDetailsCard>
                      <ChannelImageDivContainer mr={9} mt={15}>
                        <ChannelImage
                          src={profileImageUrl}
                          alt="channel logo"
                        />
                      </ChannelImageDivContainer>
                      <DivContainer ml={10}>
                        <Paragraph
                          color={theme ? '#ffffff' : '#000000'}
                          fs={15}
                          fw={400}
                        >
                          {title}
                        </Paragraph>
                        <Paragraph color="#616e7c" fs={15} fw={400}>
                          {name}
                        </Paragraph>
                        <Paragraph color="#616e7c" fs={15} fw={400}>
                          {`${viewCount} views ${dateSoFar[1]} ${dateSoFar[2]} ago`}
                        </Paragraph>
                      </DivContainer>
                    </ThumbnailDetailsCard>
                  </VideoListItem>
                </Link>
              )
            }

            return (
              <DivContainer padding={20}>
                <UnOrderList>
                  {savedVideos.map(each => videoDetails(each))}
                </UnOrderList>
              </DivContainer>
            )
          }

          const noSavedVideos = () => (
            <DivContainer
              display="flex"
              fd="column"
              ai="center"
              jc="center"
              height="100vh"
              width={100}
            >
              <NoSavedVideoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <Heading color={theme ? '#ffffff' : '#000000'} fs="25px" fw="500">
                No saved videos found
              </Heading>
              <Paragraph color="#616e7c" fs="15px" fw="400">
                You can saved your video while watching them
              </Paragraph>
              <Paragraph color="#616e7c" fs="15px" fw="400">
                Save your videos by clicking a button
              </Paragraph>
            </DivContainer>
          )

          return (
            <DivContainer
              display="flex"
              fd="column"
              bgColor={theme ? '#0f0f0f' : '#f9f9f9'}
              data-testid="savedVideos"
            >
              <Header />
              <DivContainer display="flex" fd="row">
                <Sidebar activeTab={path} />
                <DivContainer grow={1}>
                  <BannerContainer
                    display="flex"
                    fd="row"
                    height={130}
                    bgColor={theme ? '#171717' : '#ebebeb'}
                    ai="center"
                    width="auto"
                  >
                    <IconContainer
                      display="flex"
                      fd="column"
                      height={80}
                      bgColor={theme ? '#000000' : '#d7dfe9'}
                      jc="center"
                      ai="center"
                      width={80}
                      radius={50}
                      mr={20}
                    >
                      <MdPlaylistAdd size={30} color="#ff0000" />
                    </IconContainer>
                    <Heading
                      color={theme ? '#ffffff' : '#000000'}
                      size={30}
                      weight={600}
                    >
                      Saved Videos
                    </Heading>
                  </BannerContainer>
                  {savedVideos.length === 0
                    ? noSavedVideos()
                    : savedVideoSuccess()}
                </DivContainer>
              </DivContainer>
            </DivContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
