const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    userDetails:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center'
    },
    avatar:{
        borderRadius:'50px',
        margin:'20px'
    }
  });

  export default styles