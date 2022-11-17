import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

import {SiYoutubegaming} from 'react-icons/si'
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
  HomeThumbnailImage,
  UnOrderList,
} from './styledComponent'

const gameApiStatusList = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failed: 'FAILED',
}

export default class Game extends Component {
  state = {apiStatus: gameApiStatusList.initial, gameVideoList: []}

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({
      apiStatus: gameApiStatusList.inProgress,
    })
    const url = `https://apis.ccbp.in/videos/gaming`

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
      const formattedData = fetchData.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      console.log(formattedData)
      this.setState({
        apiStatus: gameApiStatusList.success,
        gameVideoList: formattedData,
      })
    } else {
      this.setState({
        apiStatus: gameApiStatusList.failed,
        gameVideoList: [],
      })
    }
  }

  gamingVideoSuccess = theme => {
    const {gameVideoList} = this.state

    const videoDetails = details => {
      const {id, thumbnailUrl, title, viewCount} = details

      return (
        <Link to={`/videos/${id}`} key={id} className="video-link-card">
          <VideoListItem>
            <HomeThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <DivContainer>
              <Paragraph
                color={theme ? '#ffffff' : '#000000'}
                size={15}
                weight={600}
              >
                {title}
              </Paragraph>
              <Paragraph color="#616e7c" size={15} weight={400}>
                {`${viewCount} Watching Worldwide`}
              </Paragraph>
            </DivContainer>
          </VideoListItem>
        </Link>
      )
    }

    return (
      <DivContainer padding={20}>
        <UnOrderList>
          {gameVideoList.map(each => videoDetails(each))}
        </UnOrderList>
      </DivContainer>
    )
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
    const {match} = this.props
    const {path} = match
    return (
      <AppContext.Consumer>
        {value => {
          const {theme} = value

          const showGamingViewStatus = () => {
            const {apiStatus} = this.state

            switch (apiStatus) {
              case gameApiStatusList.inProgress:
                return this.renderLoader(theme)
              case gameApiStatusList.success:
                return this.gamingVideoSuccess(theme)
              case gameApiStatusList.failed:
                return <FailureView refresh={this.getGamingData} />
              default:
                return null
            }
          }

          return (
            <DivContainer
              display="flex"
              fd="column"
              bgColor={theme ? '#0f0f0f' : '#f9f9f9'}
              data-testid="gaming"
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
                      <SiYoutubegaming size={30} color="#ff0000" />
                    </IconContainer>
                    <Heading
                      color={theme ? '#ffffff' : '#000000'}
                      size={30}
                      weight={600}
                    >
                      Gaming
                    </Heading>
                  </BannerContainer>
                  {showGamingViewStatus()}
                </DivContainer>
              </DivContainer>
            </DivContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
