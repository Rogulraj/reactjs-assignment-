import AppContext from '../../context'

import {
  DivContainer,
  Heading,
  Paragraph,
  Image,
  Button,
} from './styledComponent'

const FailureView = props => (
  <AppContext.Consumer>
    {value => {
      const {theme} = value
      const {refresh} = props
      return (
        <DivContainer
          height={600}
          width={100}
          display="flex"
          fd="column"
          ai="center"
          jc="center"
        >
          <Image
            height={280}
            width={330}
            src={
              theme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            }
            alt="failure view"
          />
          <Heading color={theme ? '#ffffff' : '#000000'} size={25} width={500}>
            Oops! Something Went Wrong
          </Heading>
          <Paragraph color="#475569" size={16} width={400}>
            We are having some trouble to complete your request. Please try
            again.
          </Paragraph>
          <Button
            color="#ffffff"
            size={14}
            height={35}
            width={90}
            bgColor="#4f46e5"
            onClick={refresh}
          >
            Retry
          </Button>
        </DivContainer>
      )
    }}
  </AppContext.Consumer>
)
export default FailureView
