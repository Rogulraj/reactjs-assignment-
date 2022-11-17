import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {HiFire} from 'react-icons/hi'
import AppContext from '../../context'

import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'

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
} from './styledComponent'

const trendingApiStatusList = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failed: 'FAILED',
}

export default class Trending extends Component {
  state = {apiStatus: trendingApiStatusList.initial, trendingVideoList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: trendingApiStatusList.inProgress,
    })
    const url = `https://apis.ccbp.in/videos/trending`

    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const fetchData = await response.json()
      const formattedData = fetchData.videos.map(each => ({
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      console.log(formattedData)
      this.setState({
        apiStatus: trendingApiStatusList.success,
        trendingVideoList: formattedData,
      })
    } else {
      this.setState({
        apiStatus: trendingApiStatusList.failed,
        trendingVideoList: [],
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

  trendingVideoSuccess = theme => {
    const {trendingVideoList} = this.state

    const videoDetails = details => {
      const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = details
      const {name, profileImageUrl} = channel

      const dateSoFar = formatDistanceToNow(new Date(publishedAt)).split(' ')

      return (
        <Link to={`/videos/${id}`} key={id} className="video-link-card">
          <VideoListItem>
            <HomeThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <ThumbnailDetailsCard>
              <ChannelImageDivContainer mr={9} mt={15}>
                <ChannelImage src={profileImageUrl} alt="channel logo" />
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
          {trendingVideoList.map(each => videoDetails(each))}
        </UnOrderList>
      </DivContainer>
    )
  }

  render() {
    const {match} = this.props
    const {path} = match
    return (
      <AppContext.Consumer>
        {value => {
          const {theme} = value

          const showTrendingViewStatus = () => {
            const {apiStatus} = this.state

            switch (apiStatus) {
              case trendingApiStatusList.inProgress:
                return this.renderLoader(theme)
              case trendingApiStatusList.success:
                return this.trendingVideoSuccess(theme)
              case trendingApiStatusList.failed:
                return <FailureView refresh={this.getTrendingVideos} />
              default:
                return null
            }
          }

          return (
            <DivContainer
              display="flex"
              fd="column"
              bgColor={theme ? '#0f0f0f' : '#f9f9f9'}
              data-testid="trending"
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
                      <HiFire size={30} color="#ff0000" />
                    </IconContainer>
                    <Heading
                      color={theme ? '#ffffff' : '#000000'}
                      size={30}
                      weight={600}
                    >
                      Trending
                    </Heading>
                  </BannerContainer>
                  {showTrendingViewStatus()}
                </DivContainer>
              </DivContainer>
            </DivContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
