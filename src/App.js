import './App.css'

import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import AppContext from './context'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Game from './components/Game'
import VideoDetails from './components/VideoDetails'
import NotFound from './components/NotFound'
import SavedVideo from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here

export default class App extends Component {
  state = {theme: false, savedVideos: []}

  onChangeTheme = () => {
    this.setState(prevState => ({
      theme: !prevState.theme,
    }))
  }

  onChangeSavedVideos = details => {
    const {savedVideos} = this.state
    const isPresent = savedVideos.some(each => each.id === details.id)

    if (isPresent === false) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, details],
      }))
    } else {
      this.setState(prevState => ({
        savedVideos: prevState.savedVideos.filter(
          each => each.id !== details.id,
        ),
      }))
    }
  }

  render() {
    const {theme, savedVideos} = this.state
    return (
      <AppContext.Provider
        value={{
          theme,
          savedVideos,

          onChangeTheme: this.onChangeTheme,
          onChangeSavedVideos: this.onChangeSavedVideos,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Game} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideo} />
          <ProtectedRoute component={NotFound} />
        </Switch>
      </AppContext.Provider>
    )
  }
}
