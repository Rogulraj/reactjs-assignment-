import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
  padding: 30px;
`
export const LoginForm = styled.form`
  height: 420px;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: ${props =>
    props.shadow ? '0px 2px 10px 4px #332f2f' : '1px 4px 16px 4px #ebebeb'};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: ${props => props.bgColor};
`
export const LoginLogo = styled.img`
  height: 30px;
  width: 130px;
`
export const LoginLabelText = styled.label`
  color: #475569;
  font-size: 13px;
  font-weight: 600;
`
export const LoginInput = styled.input`
  height: 35px;
  width: 100%;
  outline: none;
  border-color: #94a3b8;
  border-width: 1px;
  border-radius: 5px;
  padding: 15px;
  margin-top: 3px;
`
export const DivContainer = styled.div`
  margin-top: ${props => props.mt}px;
  display: ${props => props.di};
  flex-direction: ${props => props.fd};
  align-items: ${props => props.ai};
  justify-content: ${props => props.jc};
  margin-right: ${props => props.mr};
`
export const ShowPassword = styled.input`
  height: 15px;
  width: 15px;
`
export const LoginButton = styled.button`
  height: 35px;
  width: 100%;
  background-color: #3b82f6;
  border-style: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  margin-top: 35px;
  cursor: pointer;
`
export const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 13px;
  font-weight: 400;
  align-self: baseline;
`
