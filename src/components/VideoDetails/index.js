import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'

import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddFill} from 'react-icons/ri'

import AppContext from '../../context'

import './index.css'

import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'

import {
  DivContainer,
  VideoDivContainer,
  Heading,
  Paragraph,
  Button,
  ContentDivContainer,
  ThumbnailDetailsCard,
  ChannelImageDivContainer,
  ChannelImage,
} from './styledComponent'

const VideoDetailsList = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failed: 'FAILED',
}

export default class VideoDetails extends Component {
  state = {
    apiStatus: VideoDetailsList.initial,
    videoDetails: {},
    like: false,
    dislike: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onChangeLike = () => {
    this.setState(prevState => ({
      like: !prevState.like,
      dislike: false,
    }))
  }

  onChangeDislike = () => {
    this.setState(prevState => ({
      like: false,
      dislike: !prevState.dislike,
    }))
  }

  getVideoDetails = async () => {
    this.setState({
      apiStatus: VideoDetailsList.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const fetchData = await response.json()

      const formattedData = {
        channel: {
          name: fetchData.video_details.channel.name,
          profileImageUrl: fetchData.video_details.channel.profile_image_url,
          subscriberCount: fetchData.video_details.channel.subscriber_count,
        },
        description: fetchData.video_details.description,
        id: fetchData.video_details.id,
        publishedAt: fetchData.video_details.published_at,
        thumbnailUrl: fetchData.video_details.thumbnail_url,
        title: fetchData.video_details.title,
        videoUrl: fetchData.video_details.video_url,
        viewCount: fetchData.video_details.view_count,
      }

      this.setState({
        apiStatus: VideoDetailsList.success,
        videoDetails: formattedData,
      })
    } else {
      this.setState({
        apiStatus: VideoDetailsList.failed,
        videoDetails: {},
      })
    }
  }

  renderLoader = theme => (
    <div className="loader-container" data-testid="loader">
      <Loader
        type="ThreeDots"
        color={theme ? '#ffffff' : '#000000'}
        height="50"
        width="50"
      />
    </div>
  )

  render() {
    const {like, dislike} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {theme, savedVideos, onChangeSavedVideos} = value

          const onChangeSavedVideosCall = () => {
            const {videoDetails} = this.state
            onChangeSavedVideos(videoDetails)
          }

          const renderVideoDetails = () => {
            const {videoDetails} = this.state
            const {
              channel,
              description,
              id,
              publishedAt,
              title,
              videoUrl,
              viewCount,
            } = videoDetails
            const {name, profileImageUrl, subscriberCount} = channel
            const dateSoFar = formatDistanceToNow(new Date(publishedAt)).split(
              ' ',
            )

            const isSaved = savedVideos.some(each => each.id === id)

            return (
              <DivContainer padding="20px">
                <VideoDivContainer>
                  <ReactPlayer
                    url={videoUrl}
                    controls
                    height="100%"
                    width="100%"
                  />
                </VideoDivContainer>
                <DivContainer>
                  <Paragraph
                    color={theme ? '#ffffff' : '#000000'}
                    fs="20px"
                    fw="500"
                  >
                    {title}
                  </Paragraph>
                  <ContentDivContainer>
                    <Paragraph color="#616e7c" fs="15px" fw="400">
                      {`${viewCount} views ${dateSoFar[1]} ${dateSoFar[2]} ago`}
                    </Paragraph>
                    <DivContainer display="flex" fd="row">
                      <Button
                        color={like ? '#2563eb' : '#64748b'}
                        size="17px"
                        weight="500"
                        bgColor="transparent"
                        onClick={this.onChangeLike}
                      >
                        <BiLike
                          color={like ? '#2563eb' : '#64748b'}
                          size="23px"
                        />{' '}
                        Like
                      </Button>
                      <Button
                        size="17px"
                        weight="500"
                        bgColor="transparent"
                        color={dislike ? '#2563eb' : '#64748b'}
                        onClick={this.onChangeDislike}
                      >
                        <BiDislike
                          color={dislike ? '#2563eb' : '#64748b'}
                          size="23px"
                        />{' '}
                        Dislike
                      </Button>
                      <Button
                        color={isSaved ? '#2563eb' : '#64748b'}
                        size="16px"
                        weight="500"
                        bgColor="transparent"
                        onClick={onChangeSavedVideosCall}
                      >
                        <RiMenuAddFill
                          color={isSaved ? '#2563eb' : '#64748b'}
                          size="21px"
                        />{' '}
                        {isSaved ? 'Saved' : 'Save'}
                      </Button>
                    </DivContainer>
                  </ContentDivContainer>
                  <hr className="hr-line" />
                  <ThumbnailDetailsCard>
                    <ChannelImageDivContainer mr={9} mt={15}>
                      <ChannelImage src={profileImageUrl} alt="channel logo" />
                    </ChannelImageDivContainer>
                    <DivContainer ml={10}>
                      <Paragraph
                        color={theme ? '#ffffff' : '#000000'}
                        fs="15px"
                        fw="400"
                      >
                        {name}
                      </Paragraph>
                      <Paragraph color="#616e7c" fs="15px" fw="400">
                        {`${subscriberCount} subscribers`}
                      </Paragraph>
                      <Paragraph
                        color={theme ? '#ffffff' : '#000000'}
                        fs="15px"
                        fw="400"
                      >
                        {description}
                      </Paragraph>
                    </DivContainer>
                  </ThumbnailDetailsCard>
                </DivContainer>
              </DivContainer>
            )
          }

          const showVideoDetailsStatus = () => {
            const {apiStatus} = this.state

            switch (apiStatus) {
              case VideoDetailsList.inProgress:
                return this.renderLoader(theme)
              case VideoDetailsList.success:
                return renderVideoDetails()
              case VideoDetailsList.failed:
                return <FailureView refresh={this.getVideoDetails} />
              default:
                return null
            }
          }

          return (
            <DivContainer
              display="flex"
              fd="column"
              bgColor={theme ? '#0f0f0f' : '#f9f9f9'}
              data-testid="videoItemDetails"
            >
              <Header />
              <DivContainer display="flex" fd="row">
                <Sidebar />
                <DivContainer grow={1}>{showVideoDetailsStatus()}</DivContainer>
              </DivContainer>
            </DivContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
