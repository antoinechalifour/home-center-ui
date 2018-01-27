import React, { Component } from 'react'
import styled from 'styled-components'
import Overlay from 'components/Overlay'
import MicIcon from 'react-icons/lib/md/mic'

export default class Conversation extends Component {
  state = {
    isListening: false,
    input: '',
    conversation: []
  }

  constructor (props) {
    super(props)

    const that = this
    this.recognition = new window.webkitSpeechRecognition()
    this.recognition.interimResults = true
    this.recognition.onresult = this._onResult
    this.recognition.onend = this._onEnd
  }

  _toggleListening = () => {
    if (this.state.isListening) {
      this.setState({ isListening: false })
      this.recognition.stop()
    } else {
      this.setState({ isListening: true })
      this.recognition.start()
    }
  }

  _onResult = event => {
    let transcript = ''

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      transcript += event.results[i][0].transcript
    }

    this.setState({ input: transcript })
  }

  _onEnd = () => {
    this.props
      .conversation({
        variables: {
          input: { text: this.state.input }
        }
      })
      .then(response => {
        const msg = new SpeechSynthesisUtterance(
          response.data.conversation.conversation.text
        )
        window.speechSynthesis.speak(msg)

        this.setState({
          conversation: [
            ...this.state.conversation,
            {
              isAuthor: false,
              text: response.data.conversation.conversation.text
            }
          ]
        })
      })

    this.setState({
      isListening: false,
      conversation: [
        ...this.state.conversation,
        {
          isAuthor: true,
          text: this.state.input
        }
      ],
      input: ''
    })
  }

  render () {
    return (
      <div>
        <Button onClick={this._toggleListening}>
          <MicIcon />
        </Button>

        {this.state.isListening &&
          <OverlayContent>
            <Card>
              <ul>
                {this.state.conversation.map(({ isAuthor, text }) => (
                  <Message isAuthor={isAuthor}><span>{text}</span></Message>
                ))}
              </ul>
              <Input>{this.state.input || 'Listening...'}</Input>
            </Card>
          </OverlayContent>}
      </div>
    )
  }
}

const Button = styled.button`
  background: none;
  outline: none;
  cursor: pointer;
  border: none;
  font-size: 48px;
  opacity: .23;
`

const OverlayContent = styled(Overlay)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Card = styled.div`
  padding: 12px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .35);
  width: 95%;
  max-width: 350px;
`

const Message = styled.li`
  text-align: ${({ isAuthor }) => (isAuthor ? 'left' : 'right')};

  > span {
    display: inline-block;
    background: ${({ isAuthor, theme }) => (isAuthor ? theme.colors.primary : '#ddd')};
    color: ${({ isAuthor, theme }) => (isAuthor ? '#fff' : theme.colors.textInverse)};
    padding: 12px;
    border-radius: 4px;
  }

  + li {
    margin-top: 12px;
  }
`

const Input = styled.div`
  margin-top: 12px;
  margin-left: -12px;
  margin-right: -12px;
  margin-bottom: -12px;
  opacity: .65;
  font-style: italic;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 12px;
`
