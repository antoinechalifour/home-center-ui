import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const createFlex = (direction, additionalStyles) => {
  function Flex ({ children, ...props }) {
    const kids = React.Children.map(children, child => {
      if (child && child.props.flex) {
        const flex = typeof child.props.flex === 'number' ? child.props.flex : 1
        const style = child.props.style ? { ...child.props.style } : {}

        style.flex = flex

        return React.cloneElement(child, { style })
      } else {
        return child
      }
    })

    return (
      <Wrapper
        {...props}
        direction={direction}
        additionalStyles={additionalStyles}
      >
        {kids}
      </Wrapper>
    )
  }

  Flex.propTypes = {
    align: PropTypes.string.isRequired,
    justify: PropTypes.string.isRequired
  }

  Flex.defaultProps = {
    align: 'flex-start',
    justify: 'flex-start'
  }

  return Flex
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};

  ${({ additionalStyles }) => additionalStyles}
`

export default createFlex
