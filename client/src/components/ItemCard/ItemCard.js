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
import Gravatar from 'react-gravatar'
import moment from 'moment'
import styles from './styles'
import { Link } from 'react-router-dom';




const ItemCard = ({ classes, item }) => (
  <Card className={classes.card}>
    <CardMedia className={classes.media} image={item.imageurl}></CardMedia>
    <Link to={`/profile/${item.itemowner.id}`}>
    <CardHeader
      avatar={
        <Gravatar className={classes.avatar} email={item.itemowner.email} />
 
      }
      title={item.itemowner.fullname}
      subheader={moment(new Date(item.created)).fromNow()}
      className={classes.header}
      
    />
    </Link>
    <CardContent className={classes.content}>
      <Typography gutterBottom variant="headline" component="h2">
        {item.title}
      </Typography>

      <Typography component="p" className={classes.tagsText}>
        {item.tags.map(tag => tag.title).join(', ')}
      </Typography>

      <Typography component="p">{item.description}</Typography>
    </CardContent>
    <CardActions>
      <Button variant="outlined" size="small" color="secondary">
        Borrow
      </Button>
    </CardActions>
  </Card>
)

export default withStyles(styles)(ItemCard)
