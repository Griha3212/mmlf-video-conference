import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  singleSpeakerBlock: {

    [theme.breakpoints.up('xs')]: {
      marginBottom: '35px',
      marginRight: '35px',
      flex: '0 0 100% !important',
      maxWidth: '100% !important',

    },

    [theme.breakpoints.up('sm')]: {
      marginBottom: '0px',
      marginRight: '0px',
      flex: '0 0 100% !important',
      maxWidth: '16.666667% !important',

    },

    [theme.breakpoints.up('lg')]: {
      marginBottom: '0px',
      marginRight: '0px',

    },
    [theme.breakpoints.up('xl')]: {
      marginBottom: '0px',
      marginRight: '0px',

    },

  },

  loadZoomImg: {

    [theme.breakpoints.up('xs')]: {
      width: 'auto',

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

    [theme.breakpoints.up('lg')]: {
      maxWidth: '79px',

    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '117px',

    },

  },

  smallScoreStarImg: {

    color: '#FF414A',

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

    [theme.breakpoints.up('lg')]: {
      marginTop: '30px',

    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '120px',
      justify: 'space-around',

    },

  },

  moderatorInfoBlock: {

    // maxHeight: '120px',

    [theme.breakpoints.up('xs')]: {
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: '0px',

    },

    [theme.breakpoints.up('lg')]: {
      marginTop: '10px',
      marginBottom: 'auto',
      marginLeft: '0px',

    },
    [theme.breakpoints.up('xl')]: {
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: '30px',

    },

  },

  // speakersBlockHeaderContainer: {

  //   height: '3.7vw',

  // },

  moderatorContainerInfoBlock: {

    height: '120px',

    [theme.breakpoints.down('xs')]: {
      height: 'auto',
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingTop: '20px',

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
      marginBottom: '20px',

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

    [theme.breakpoints.up('lg')]: {
      fontSize: '3.3vw',
      textAlign: 'left',
      marginTop: '0px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '70px',
      lineHeight: '79px',
      textAlign: 'left',
      marginTop: '0px',
    },

  },

  mainContainerBckg: {
    boxShadow: '0px 3px 60px #00000029',
    backgroundColor: 'white',
    // height: '827px',

    [theme.breakpoints.up('xs')]: {

      marginTop: '20px',

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
      paddingBottom: '153px',
      marginTop: '72px',

    },

  },

  sessionNameText: {

    fontFamily: 'Open Sans',
    fontWeight: 700,
    fontSize: '42px',
    lineHeight: '27px',
    color: 'white',
    marginTop: '32px',
    marginBottom: '38px',

  },

  sessionLetterText: {

    marginTop: '0px',
    fontFamily: 'Gotham Pro Bold',
    fontSize: '22px',
    lineHeight: '31px',
    backgroundColor: '#FF414A',
    height: '34px',
    width: '163px',
    color: 'white',
    textAlign: 'center',

  },

  mainSessionInfoContainer: {

  },

  mxAuto: {

    margin: '0 auto',

  },

  textCenter: {

    textAlign: 'center',

  },

  rateSpeakerText: {

    fontFamily: 'Open Sans',
    fontWeight: 300,
    fontSize: '15px',
    lineHeight: '28px',
    color: 'white',
    marginTop: '0px',

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
