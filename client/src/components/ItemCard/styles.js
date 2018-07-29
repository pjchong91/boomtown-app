const styles = theme => ({
    card: {
        justifyContent: 'space-between',
        display: 'flex',
        height: '100%',
        flexDirection: 'column'
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        background: theme.palette.primary.main,
        backgroundPosition: 'center'
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
      avatar:{
          borderRadius: '50px'
      }
})

export default styles
