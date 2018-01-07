import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from 'ui/Button'
import ColorPicker from 'ui/ColorPicker'

export default function ColorSettings ({ theme, changeColor, commit, reset }) {
  const colorsSettings = theme.colors

  return (
    <Wrapper>
      {Object.keys(colorsSettings).map(setting => {
        const color = colorsSettings[setting]

        return (
          <Color key={setting}>
            <ColorPicker
              value={color}
              onChange={value => changeColor(setting, value)}
            />
            <span>{setting}</span>
          </Color>
        )
      })}

      <Actions>
        <Button onClick={reset}>Reset theme</Button>
        <Button primary onClick={commit}>Validate</Button>
      </Actions>
    </Wrapper>
  )
}

ColorSettings.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired
  }).isRequired,
  changeColor: PropTypes.func.isRequired,
  commit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
}

const Wrapper = styled.div`
  background: #fff;
  position: relative;
  width: 100%;
  font-size: 75%;
  padding: 12px;

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
