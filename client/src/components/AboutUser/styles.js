const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      padding:'50px',
      minHeight:'250px',
      margin:'16px'
    //   overflow:'visible',
    //   height: '450px'
    },
    userDetails:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
    },
    itemDetails:{
        padding:'0px 16px'
    },
    avatar:{
        borderRadius:'50px',
        // margin:'20px'
    },
    profileText:{
        fontSize: '16px',
        lineHeight: 1.8
    }
  });

  export default styles