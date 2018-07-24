
const styles = theme => ({
  root:{
      padding: '16px',
      [theme.breakpoints.up('sm')]:{
        // justifyContent: 'space-between',
        display: 'flex',
        height: '100%',
        flexDirection: 'row',
        justifyContent:'space-between'
        
    },
    [theme.breakpoints.up('md')]:{
        // justifyContent: 'space-between',
        padding: '40px 160px'
        
    }
  },
  shareCard:{
    display: "none"
  },
  shareCard: {
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
    
  }
  })
  

  
export default styles
