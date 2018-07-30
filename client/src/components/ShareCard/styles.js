const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    background: theme.palette.primary.main,
    backgroundPosition: 'center'
  },
  header: {
    textAlign: 'left'
  },
  content: {
    textAlign: 'left'
  },
  tagsText: {
    color: 'rgba(0, 0, 0, 0.54)'
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  }
})

export default styles
