import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  moderatorAvatarImg: {

  },

  singleSpeakerBlock: {

    [theme.breakpoints.up('xs')]: {
      marginBottom: '35px',
      marginRight: '35px',
      flex: '0 0 100% !important',
      maxWidth: '100% !important',

    },

    [theme.breakpoints.up('sm')]: {
      marginBottom: '35px',
      marginRight: '0px',
      flex: '0 0 50% !important',
      maxWidth: '50% !important',

    },

    [theme.breakpoints.up('md')]: {

      marginRight: '0px',

      marginBottom: '35px',
      flex: '0 0 20% !important',
      maxWidth: '20% !important',

    },

    [theme.breakpoints.up('lg')]: {

      marginRight: '0px',

      marginBottom: '35px',
      flex: '0 0 20% !important',
      maxWidth: '20% !important',

    },
    [theme.breakpoints.up('xl')]: {

      marginRight: '0px',
      marginBottom: '35px',
      flex: '0 0 20% !important',
      maxWidth: '20% !important',

    },

  },

  loadZoomImg: {

    [theme.breakpoints.up('xs')]: {
      width: 'auto',

    },

    [theme.breakpoints.up('md')]: {
      width: '22px',

    },

    [theme.breakpoints.up('lg')]: {
      width: 'auto',

    },
    [theme.breakpoints.up('xl')]: {
      width: 'auto',

    },

  },

  sendContactsImg: {

    [theme.breakpoints.up('xs')]: {
      width: 'auto',

    },

    [theme.breakpoints.up('md')]: {
      width: '35px',

    },

    [theme.breakpoints.up('lg')]: {
      width: 'auto',

    },
    [theme.breakpoints.up('xl')]: {
      width: 'auto',

    },

  },

  loadPDFImg: {

    [theme.breakpoints.up('xs')]: {
      width: 'auto',

    },

    [theme.breakpoints.up('md')]: {
      width: '15px',

    },

    [theme.breakpoints.up('lg')]: {
      width: 'auto',

    },
    [theme.breakpoints.up('xl')]: {
      width: 'auto',

    },

  },

  pointerImg: {

    cursor: 'pointer',

  },

  disabledImg: {

    pointerEvents: 'none',

  },

  speakerAvatarInsideSessionParagraph: {

    textAlign: 'center',

  },

  speakerNameInsideSession: {

    fontFamily: 'Open Sans',
    fontWeight: 700,

    color: 'black',
    marginBottom: '0px',
    marginTop: '0px',
    textAlign: 'center',

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.4vw',
      lineHeight: '1.8vw',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '30px',
      lineHeight: '41px',

    },

  },

  speakerAvatarInsideSession: {

    [theme.breakpoints.up('md')]: {
      maxWidth: '79px',

    },

    [theme.breakpoints.up('lg')]: {
      maxWidth: '90px',

    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '144px',

    },

  },

  smallScoreStarImg: {

    color: '#FF414A',

    [theme.breakpoints.up('md')]: {
      fontSize: '15px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '22px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '30px',

    },

  },

  moderatorFullName: {

    fontFamily: 'Open Sans',
    fontWeight: 600,

    color: 'black',
    marginBottom: '0px',
    marginTop: '0px',

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3vw',
      lineHeight: '1.8vw',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '30px',
      lineHeight: '41px',

    },

  },

  sessionSpeakersBlock: {

    [theme.breakpoints.up('xs')]: {
      marginTop: '30px',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      overflow: 'auto',
      // overflowX: 'scroll',

      '&::-webkit-scrollbar': {
        height: '15px',

      },

      '&::-webkit-scrollbar-track': {
        backgroundColor: '#e3e3e3',
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ff414a',
      },

    },

    [theme.breakpoints.up('sm')]: {
      marginTop: '30px',
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      // overflowX: 'scroll',

      '&::-webkit-scrollbar': {
        height: '15px',

      },

      '&::-webkit-scrollbar-track': {
        backgroundColor: '#e3e3e3',
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ff414a',
      },

    },

    [theme.breakpoints.up('md')]: {
      marginTop: '30px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      overflow: 'visible',

    },

    [theme.breakpoints.up('lg')]: {
      marginTop: '30px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      overflow: 'visible',

    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '80px',
      justifyContent: 'center',
      overflow: 'visible',
    },

  },

  moderatorInfoBlock: {

    // maxHeight: '120px',

    [theme.breakpoints.up('xs')]: {
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: '0px',

    },

    [theme.breakpoints.up('sm')]: {
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: '0px',
      paddingLeft: '20px',

    },

    [theme.breakpoints.up('md')]: {
      marginTop: '5px',
      marginBottom: 'auto',
      marginLeft: '0px',
      paddingLeft: '0px',

    },

    [theme.breakpoints.up('lg')]: {
      marginTop: '10px',
      marginBottom: 'auto',
      marginLeft: '0px',
      paddingLeft: '0px',

    },
    [theme.breakpoints.up('xl')]: {
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: '18px',
      paddingLeft: '0px',

    },

  },

  moderatorContainerInfoBlock: {

    height: '120px',

    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingTop: '20px',
      justifyContent: 'center',

    },

    [theme.breakpoints.down('xs')]: {
      height: 'auto',
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingTop: '20px',
      justifyContent: 'space-around',

    },

  },

  moderatorHeaderText: {

    marginTop: '0px',
    fontFamily: 'Gotham Pro Bold',

    backgroundColor: '#FF414A',
    fontSize: '20px',
    lineHeight: '30px',
    width: '135px',
    height: '31px',

    color: 'white',
    textAlign: 'center',

    [theme.breakpoints.up('xs')]: {
      fontSize: '4vw',
      lineHeight: '5.7vw',
      width: '28.7vw',
      height: '5.6vw',
      marginBottom: '13px',
    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.7vw',
      lineHeight: '3.2vw',
      width: '12vw',
      height: '3vw',
      marginBottom: '5px',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.1vw',
      lineHeight: '2.2vw',
      width: '7.5vw',
      height: '2vw',
      marginBottom: '11px',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1vw',
      lineHeight: '1.7vw',
      width: '6.7vw',
      height: '1.6vw',
      marginBottom: '13px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '20px',
      lineHeight: '30px',
      width: '135px',
      height: '31px',
      marginBottom: '8px',

    },

  },

  zoomPdfIconsItem: {

    display: 'flex',
    justifyContent: 'center',

  },

  speakersBlockHeader: {

    fontFamily: 'Gotham Pro Black',

    textTransform: 'uppercase',
    color: '#00124D',

    [theme.breakpoints.up('xs')]: {
      fontSize: '6.7vw',
      textAlign: 'center',
      marginTop: '40px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '4.7vw',
      lineHeight: '4.8vw',
      marginLeft: 'auto',
      marginRight: 'auto',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '3.4vw',
      lineHeight: '4vw',
      marginTop: '10px',
      textAlign: 'left',
      marginLeft: '4vw',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '3.3vw',
      textAlign: 'left',
      marginLeft: '0vw',
      marginTop: '5px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '70px',
      lineHeight: '79px',
      textAlign: 'left',
      marginTop: '18px',
      marginLeft: '3vw',
    },

  },

  mainContainerBckg: {
    boxShadow: '0px 3px 60px #00000029',
    backgroundColor: 'white',
    // height: '827px',

    [theme.breakpoints.up('xs')]: {

      marginTop: '20px',

    },

    [theme.breakpoints.up('md')]: {
      padding: '0 60px',
      paddingTop: '68px',
      marginTop: '37px',
      paddingBottom: '63px',

    },

    [theme.breakpoints.up('lg')]: {
      padding: '0 106px',
      paddingTop: '68px',
      marginTop: '45px',
      paddingBottom: '63px',

    },
    [theme.breakpoints.up('xl')]: {
      padding: '0 110px',
      paddingTop: '107px',
      paddingBottom: '91px',
      marginTop: '105px',

    },

  },

  moderatorImg: {

    [theme.breakpoints.up('xs')]: {

    },

    [theme.breakpoints.up('md')]: {

    },

    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '117px',

    },

  },

  mainSessionInfoContainer: {

  },

  mxAuto: {

    margin: '0 auto',

  },

  textCenter: {

    textAlign: 'center',

  },

  goToZoomButton: {

    fontFamily: 'Gotham Pro Medium',
    fontSize: '21px',
    lineHeight: '23px',
    backgroundColor: '#2D8CFF',
    height: '53px',
    width: '302px',
    color: 'white',
    textAlign: 'center',
    borderRadius: '0px',

  },

}));

export default useStyles;
