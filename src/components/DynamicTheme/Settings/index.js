import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card, * as card from 'ui/Card'
import Button from 'ui/Button'
import ColorPicker from 'ui/ColorPicker'

export default function Settings ({ theme, onColorChange, onCommit, onReset }) {
  const colorsSettings = theme.colors

  return (
    <Wrapper>
      <Content>
        {Object.keys(colorsSettings).map(setting => {
          const color = colorsSettings[setting]

          return (
            <Color key={setting}>
              <ColorPicker
                value={color}
                onChange={value => onColorChange(setting, value)}
              />
              <span>{setting}</span>
            </Color>
          )
        })}

        <Actions>
          <Button onClick={onReset}>Reset theme</Button>
          <Button primary onClick={onCommit}>Validate</Button>
        </Actions>
      </Content>
    </Wrapper>
  )
}

Settings.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired
  }).isRequired,
  onColorChange: PropTypes.func.isRequired,
  onCommit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
}

const Wrapper = styled(Card)`
  position: relative;
  width: 100%;
  font-size: 75%;
`

const Content = styled(card.Content)`
  display: flex;
  flex-direction: column;

  > div {
    padding: 12px;
  }

  @media (min-width: 860px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`

const Color = styled.div`
  display: flex;
  align-items: center;

  > :first-child {
    display: inline-flex;
    margin-right: 12px;
  }
`

const Actions = styled.div`
  display: flex;
  flex-direction: column;

  button {
    flex: 1;
  }

  button + button {
    margin-top: 4px;
  }
`
