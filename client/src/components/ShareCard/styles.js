const styles = theme => ({
    card: {
        display: 'none',
        [theme.breakpoints.up('sm')]:{
            width: '50%',
            height: '50%',
                        display: 'flex',
            flexDirection: 'column'
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
      }
})

export default styles
