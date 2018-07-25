const styles = theme => ({
    root: {
      flexGrow: 1,
      height: '100%',
      background: theme.palette.secondary.main,
      [theme.breakpoints.up('sm')]:{
          padding: theme.spacing.unit*8,
          justifyContent:'flex-start'
      },
    //   padding: theme.spacing.unit*2,
    //   [theme.breakpoints.up('md')]: {
    //     padding: theme.spacing.unit * 8
    //   }
    },
    itemCard:{
        padding: '16px',
        // height: '100%'
    }

  })
  
  export default styles
  