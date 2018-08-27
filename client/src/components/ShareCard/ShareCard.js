import React from 'react'
import ItemCard from './../../components/ItemCard'
import styles from './styles'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'
import { ViewerContext } from '../../context/ViewerProvider'
import PropTypes from 'prop-types'

const ShareCard = props => (
  <ViewerContext.Consumer>
    {({ viewer }) => {
      props.shareItemPreview.itemowner = {
        fullname: viewer.fullname,
        email: viewer.email
      }
      return <ItemCard item={props.shareItemPreview} />
    }}
  </ViewerContext.Consumer>
)

const mapStateToProps = state => ({
  shareItemPreview: state.shareItemPreview
})

ShareCard.propTypes = {
  classes: PropTypes.object.isRequired,
  shareItemPreview: PropTypes.shape({
    created: PropTypes.instanceOf(Date).isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    itemowner: PropTypes.shape({
      fullname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    }).isRequired
  })
}

export default connect(mapStateToProps)(withStyles(styles)(ShareCard))
