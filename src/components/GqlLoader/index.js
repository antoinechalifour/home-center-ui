import React from 'react'
import PropTypes from 'prop-types'
import Loader from 'ui/Loader'

export default function gqlLoaderHoc (Component) {
  function GqlLoader (props) {
    if (props.data.loading) {
      return <Loader />
    }

    return <Component {...props} />
  }

  GqlLoader.propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired
    }).isRequired
  }

  return GqlLoader
}
