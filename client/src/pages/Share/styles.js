
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
  }
  })
  

  
export default styles
