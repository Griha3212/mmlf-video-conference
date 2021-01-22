import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  loadZoomImg: {

    [theme.breakpoints.up('lg')]: {
      width: '40px',

    },
    [theme.breakpoints.up('xl')]: {
      width: 'auto',

    },

  },

  loadPDFImg: {

    [theme.breakpoints.up('lg')]: {
      width: '33px',

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
      fontSize: '22px',
      lineHeight: '30px',

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
      fontSize: '25px',

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

    [theme.breakpoints.up('lg')]: {
      marginTop: '30px',

    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '120px',

    },

  },

  moderatorInfoBlock: {

    // maxHeight: '120px',

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

  },

  speakerHeaderText: {

    marginTop: '0px',
    fontFamily: 'Gotham Pro Bold',
    fontSize: '20px',
    lineHeight: '30px',
    backgroundColor: '#FF414A',
    height: '31px',
    width: '135px',
    color: 'white',
    textAlign: 'center',

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

  speakersBlockHeader: {

    fontFamily: 'Gotham Pro Black',

    marginTop: '0px',
    textTransform: 'uppercase',
    color: '#00124D',

    [theme.breakpoints.up('xs')]: {
      fontSize: '3.3vw',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '3.3vw',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '70px',
      lineHeight: '79px',

    },

  },

  mainContainerBckg: {
    boxShadow: '0px 3px 60px #00000029',
    backgroundColor: 'white',
    // height: '827px',

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

  lightBlueBckg: {

    backgroundColor: '#1B3074',
    width: '100%',
    padding: '0 110px',
    paddingTop: '61px',

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
