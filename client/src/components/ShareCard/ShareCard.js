import React from 'react'
import ItemCard from './../../components/ItemCard'
import styles from './styles'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'

const ShareCard = props => (
  
  <ItemCard item={props.shareItemPreview} />
  
)

const mapStateToProps = state =>({
    shareItemPreview: state.shareItemPreview
  }
)


export default connect (mapStateToProps)(withStyles(styles)(ShareCard))

