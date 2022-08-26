import PropTypes from 'prop-types'

const SampleComponent = props => {
  return <div id={props.htmlId}>{props.children}</div>
}

SampleComponent.propTypes = {
  htmlId: PropTypes.string.isRequired,
}

export default SampleComponent
