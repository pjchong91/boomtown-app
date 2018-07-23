
const styles = theme => ({
    header: {
      fontSize: '45px',
      fontWeight: '700',
      margin: '70px 0',
      lineHeight: '1.0'
    },
    selectImageButton:{
        backgroundColor: theme.palette.primary.main,
        width: '100%'
    },
    inputName: {
        width: '100%',
        margin: '10px 0'
    },
    inputDescription:{
        width: '100%',
        margin: '10px 0'
    },
    shareSubmitButton:{
        margin:'10px 0'
    },
    root:{
        [theme.breakpoints.up('sm')]:{
            width: '50%',
            height: '100%',
            margin: '50px 10px'
        }
    },
    tag:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    root:{
        maxWidth: '420px'
    }
    


  })
  

  
export default styles
