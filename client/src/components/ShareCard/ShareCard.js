import React from 'react'
import {
  withStyles,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Avatar,
  CardHeader
} from '@material-ui/core'
import moment from 'moment'
import ItemCard from './../../components/ItemCard'
import styles from './styles'
import { connect } from 'react-redux'

// const item = {
//   itemowner: {
//     fullname: 'Item Owner Name'
//   },
//   title: 'Name your item',
//   tags:[],
//   description: 'Describe your item'

// }

const ShareCard = props => (
  
  <ItemCard item={props.shareItemPreview} />
  // <Card className={classes.card}>
  //   <CardMedia className={classes.media} />
  //   <div className={classes.textContent}>
  //   <CardHeader
  //     avatar={
  //       <Avatar aria-label="Recipe" className={classes.avatar}>
  //         R
  //       </Avatar>
  //     }
  //     title='Username here'
  //     subheader='a few seconds ago'
  //     className={classes.header}
  //   />
  //   <CardContent className={classes.content}>
  //     <Typography gutterBottom variant="headline" component="h2">
  //       Name your item
  //     </Typography>

  //     <Typography component="p" className={classes.tagsText}>
  //       {/* Placeholder for tags */}
  //     </Typography>

  //     <Typography component="p">Describe your item</Typography>
  //   </CardContent>
  //   <CardActions>
  //     <Button variant="outlined" size="small" color="secondary">
  //       Borrow
  //     </Button>
  //   </CardActions>
  //   </div>
  // </Card>
)

const mapStateToProps = state =>({
    shareItemPreview: state.shareItemPreview
  }
)


export default connect (mapStateToProps)(ShareCard)

// withStyles(styles)(ShareCard)
