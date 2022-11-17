import styled from 'styled-components'

export const SidebarContainer = styled.div`
  min-height: 300px;
  width: 240px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const UnOrderList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
`
export const ListItem = styled.li`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ListItemText = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-weight: 400;
  padding-left: 15px;
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.fs}px;
  font-weight: ${props => props.fw};
`
export const Paragraph = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.fs}px;
  font-weight: ${props => props.fw};
`
