import React from 'react'
import ItemCard from './../../components/ItemCard'
import styles from './styles'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'
import { ViewerContext } from '../../context/ViewerProvider'


const ShareCard = props => (

     <ViewerContext.Consumer>
        {({ viewer }) => {
          props.shareItemPreview.itemowner = {
            fullname: viewer.fullname,
            email: viewer.email
          }
return(
<ItemCard item={props.shareItemPreview} />
)

           
          }}
      </ViewerContext.Consumer>
)

const mapStateToProps = state =>({
    shareItemPreview: state.shareItemPreview
  }
)


export default connect (mapStateToProps)(withStyles(styles)(ShareCard))

