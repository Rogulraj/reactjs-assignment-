import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {IoClose, IoSearchSharp} from 'react-icons/io5'

import AppContext from '../../context'

import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'

import './index.css'

import {
  HomeContainer,
  SideAndHomeCard,
  HomeCard,
  BannerContainer,
  BannerLogoImage,
  Paragraph,
  BannerGetItButton,
  ImageAndCloseCard,
  BannerCloseButton,
  HomeVideoCard,
  SearchInputBox,
  SearchInputBoxCard,
  SearchButton,
  HomeVideoListCard,
  UnOrderList,
  VideoListItem,
  HomeThumbnailImage,
  ThumbnailDetailsCard,
  ChannelImage,
  DivContainer,
  NoResultImage,
  Heading,
  RetryButton,
  ShowBanner,
} from './styledComponent'

const homeApiStatusList = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failed: 'FAILED',
}

export default class Home extends Component {
  state = {
    homeApiStatus: homeApiStatusList.initial,
    searchInput: '',
    videoList: [],
    banner: true,
  }

  componentDidMount() {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({
      homeApiStatus: homeApiStatusList.inProgress,
    })

    const {searchInput} = this.state

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

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
      this.setState({
        videoList: formattedData,
        homeApiStatus: homeApiStatusList.success,
      })
    } else {
      this.setState({
        videoList: [],
        homeApiStatus: homeApiStatusList.failed,
      })
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  searchInputChange = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  videoListItemsCard = theme => {
    const {videoList} = this.state

    const videoDetails = details => {
      const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = details
      const {name, profileImageUrl} = channel

      const dateSoFar = formatDistanceToNow(new Date(publishedAt)).split(' ')

      return (
        <Link to={`/videos/${id}`} key={id} className="video-link-card">
          <VideoListItem>
            <HomeThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <ThumbnailDetailsCard>
              <DivContainer mr={9} mt={15}>
                <ChannelImage src={profileImageUrl} alt="channel logo" />
              </DivContainer>
              <DivContainer>
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

    const noResultView = () => (
      <DivContainer
        display="flex"
        fd="column"
        ai="center"
        height={500}
        width={100}
        mt={50}
      >
        <NoResultImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <Heading color={theme ? '#ffffff' : '#000000'} fs={25} fw={500}>
          No Search results found
        </Heading>
        <Paragraph color="#616e7c" fs={15} fw={400}>
          Try different key words or remove search filter
        </Paragraph>
        <RetryButton
          height={35}
          width={75}
          bgColor="#4f46e5"
          color="#ffffff"
          fs={13}
          fw={600}
          type="button"
          onClick={this.getVideoData}
        >
          Retry
        </RetryButton>
      </DivContainer>
    )

    return (
      <HomeVideoListCard>
        {videoList.length !== 0 ? (
          <UnOrderList>{videoList.map(each => videoDetails(each))}</UnOrderList>
        ) : (
          noResultView()
        )}
      </HomeVideoListCard>
    )
  }

  showResultBasedOnApi = theme => {
    const {homeApiStatus} = this.state
    switch (homeApiStatus) {
      case homeApiStatusList.success:
        return this.videoListItemsCard(theme)
      case homeApiStatusList.failed:
        return <FailureView refresh={this.getVideoData} />
      case homeApiStatusList.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  onChangeBanner = () => {
    this.setState({
      banner: false,
    })
  }

  render() {
    const {searchInput, banner} = this.state

    const {match} = this.props
    const {path} = match

    return (
      <AppContext.Consumer>
        {value => {
          const {theme} = value

          return (
            <HomeContainer
              data-testid="home"
              bgColor={theme ? '#181818' : '#f9f9f9'}
            >
              <Header />
              <SideAndHomeCard>
                <Sidebar activeTab={path} />
                <HomeCard>
                  {banner && (
                    <ShowBanner>
                      <BannerContainer data-testid="banner">
                        <ImageAndCloseCard>
                          <BannerLogoImage
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="nxt watch logo"
                          />
                          <BannerCloseButton
                            onClick={this.onChangeBanner}
                            type="button"
                            data-testid="close"
                          >
                            <IoClose size={20} />
                          </BannerCloseButton>
                        </ImageAndCloseCard>
                        <Paragraph color="#1e293b" width={300} fs={19} fw={400}>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </Paragraph>
                        <BannerGetItButton type="button">
                          GET IT NOW
                        </BannerGetItButton>
                      </BannerContainer>
                    </ShowBanner>
                  )}
                  <HomeVideoCard>
                    <SearchInputBoxCard>
                      <SearchInputBox
                        onChange={this.searchInputChange}
                        value={searchInput}
                        type="search"
                        placeholder="Search"
                      />
                      <SearchButton
                        type="button"
                        onClick={this.getVideoData}
                        bgColor={theme ? '#212121' : '#f4f4f4'}
                        data-testid="searchButton"
                      >
                        <IoSearchSharp size={20} color="#64748b" />
                      </SearchButton>
                    </SearchInputBoxCard>
                    {this.showResultBasedOnApi(theme)}
                  </HomeVideoCard>
                </HomeCard>
              </SideAndHomeCard>
            </HomeContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
