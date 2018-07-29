const styles = theme => ({
    itemHeader:{
        color: theme.palette.primary.main,
        margin: '24px 0px 0px 16px'
    },
    root:{
        backgroundColor: theme.palette.secondary.main,
        // height: '100%',
        height:'auto',
        flexDirection:'column',
        flexWrap:'nowrap',
        padding: '0px',
        [theme.breakpoints.up('sm')]:{
            padding: theme.spacing.unit*8,
        }
    },
    itemTitle:{
        color: 'blue',
   
    },
    itemCard:{
        padding:'16px'
    },
  
    aboutUser:{
        overflow: 'visible'
    },
    gridItem:{
        margin:'16px'
    }

})

export default styles
