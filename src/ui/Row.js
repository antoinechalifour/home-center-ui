import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Row = ({ children, ...props }) => {
  const kids = React.Children.map(children, child => {
    if (child.props.flex) {
      const flex = typeof child.props.flex === 'number' ? child.props.flex : 1
      const style = child.props.style ? { ...child.props.style } : {}

      style.flex = flex

      return React.cloneElement(child, { style })
    } else {
      return child
    }
  })

  return <Wrapper {...props}>{kids}</Wrapper>
}

Row.propTypes = {
  align: PropTypes.string.isRequired,
  justify: PropTypes.string.isRequired
}

Row.defaultProps = {
  align: 'flex-start',
  justify: 'flex-start'
}

const Wrapper = styled.div`
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
`

export default Row
