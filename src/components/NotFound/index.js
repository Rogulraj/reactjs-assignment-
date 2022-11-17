import AppContext from '../../context'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {DivContainer, Image, Heading, Paragraph} from './styledComponent'

const NotFound = () => (
  <AppContext.Consumer>
    {value => {
      const {theme} = value

      return (
        <DivContainer
          display="flex"
          fd="column"
          bgColor={theme ? '#0f0f0f' : '#f9f9f9'}
        >
          <Header />
          <DivContainer display="flex" fd="row">
            <Sidebar />
            <DivContainer
              grow={1}
              display="flex"
              fd="column"
              ai="center"
              jc="center"
              height={600}
            >
              <Image
                src={
                  theme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <Heading color={theme ? '#ffffff' : '#000000'}>
                Page Not Found
              </Heading>
              <Paragraph color="#94a3b8">
                we are sorry, the page you requested could not be found.
              </Paragraph>
            </DivContainer>
          </DivContainer>
        </DivContainer>
      )
    }}
  </AppContext.Consumer>
)
export default NotFound
