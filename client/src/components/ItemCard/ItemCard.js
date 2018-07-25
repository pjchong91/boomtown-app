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
import styles from './styles'

const ItemCard = ({ classes, item }) => (
  <Card className={classes.card}>
    <CardMedia className={classes.media} image={item.imageUrl} />
    <CardHeader
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          R
        </Avatar>
      }
      title={item.itemowner.fullname}
      subheader={moment(new Date(item.created)).fromNow()}
      className={classes.header}
    />
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
