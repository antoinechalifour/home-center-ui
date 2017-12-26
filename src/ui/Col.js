import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Col = ({ children, ...props }) => {
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

Col.propTypes = {
  align: PropTypes.string.isRequired,
  justify: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

Col.defaultProps = {
  align: 'flex-start',
  justify: 'flex-start'
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
`

export default Col
