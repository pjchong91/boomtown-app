const styles = theme => ({
  root: {
    padding: '16px',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    [theme.breakpoints.up('md')]: {
      padding: '40px 160px'
    }
  },
  shareCard: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      maxWidth: '420px',
      display: 'flex',
      flexDirection: 'column',
      margin: '50px 10px'
    },
    [theme.breakpoints.up('md')]: {}
  }
})

export default styles
