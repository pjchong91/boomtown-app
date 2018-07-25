
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
        margin:'10px 0',
        display: 'block'
    },
    root:{
        [theme.breakpoints.up('sm')]:{
            width: '50%',
            height: '100%',
            margin: '50px 10px'
        },
        [theme.breakpoints.up('md')]:{
            maxWidth: '420px'
        }
    },
    tag:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    tagSelector:{
        width: '100%'
    },
    tagInputLabel:{
        width: '100%'
    }
    


  })
  

  
export default styles
