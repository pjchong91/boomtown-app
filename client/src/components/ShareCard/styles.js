const styles = theme => ({
    card: {
        display: 'none',
        [theme.breakpoints.up('sm')]:{
            width: '50%',
            maxWidth: '420px',
            // height: '100%',
                        display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'space-between',
            margin: '50px 10px'
        },
        [theme.breakpoints.up('md')]:{
            // height: '100%'
        }
        
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        background: theme.palette.primary.main
      },
      header:{
          textAlign: 'left'
      },
      content:{
          textAlign:'left'
      },
      tagsText:{
          color: 'rgba(0, 0, 0, 0.54)'
      },
      textContent:{
          display: 'flex',
          flexDirection:'column',
          justifyContent:'space-between',
          height: '100%'
      }
})

export default styles
