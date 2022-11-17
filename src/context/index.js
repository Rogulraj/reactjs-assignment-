import React from 'react'

const AppContext = React.createContext({
  theme: false,
  onChangeTheme: () => {},
  savedVideos: [],
  onChangeSavedVideos: () => {},
})

export default AppContext
