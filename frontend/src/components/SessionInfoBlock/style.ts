import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  myAuto: {

    marginTop: 'auto',
    marginBottom: 'auto',

  },

  noLeftPadding: {

    [theme.breakpoints.up('xs')]: {
      paddingLeft: '0px !important',

    },

    [theme.breakpoints.up('xl')]: {
      paddingLeft: '10px !important',

    },

  },

  MuiRating: {

    '&root': {

      color: '#F8F9F9',

    },

    [theme.breakpoints.up('xl')]: {
      '&root': {

        margingBottom: '10px',

      },
    },

  },

  rateSpeakerStarsImg: {

    color: '#FF414A',

    [theme.breakpoints.up('xs')]: {
      fontSize: '2.2rem',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.4rem',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.6rem',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.6rem',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.5rem',
    },

  },

  speakerInfoBlock: {

    [theme.breakpoints.down('sm')]: {
      marginBottom: '47px',

    },

  },

  speakerAvatarImg: {

    borderRadius: '50%',
    border: '4px solid white',

    [theme.breakpoints.up('sm')]: {
      maxWidth: '20vw',

    },

    [theme.breakpoints.up('lg')]: {
      width: '6vw',

    },
    [theme.breakpoints.up('xl')]: {
      width: '100%',
    },

  },

  speakerFullCompanyText: {

    fontFamily: 'Open Sans',
    fontWeight: 400,

    color: 'white',
    marginTop: '5px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.4vw',
      lineHeight: '1.8vw',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.2vw',
      lineHeight: '1.6vw',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '0.8vw',
      lineHeight: '1vw',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '15px',
      lineHeight: '20px',
    },

  },

  speakerFullNameText: {

    fontFamily: 'Open Sans',
    fontWeight: 600,

    color: 'white',
    marginTop: '5px',
    marginBottom: '0px',

    [theme.breakpoints.up('md')]: {
      fontSize: '2vw',
      lineHeight: '2.8vw',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.4vw',
      lineHeight: '1.8vw',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '30px',
      lineHeight: '41px',
    },

  },

  speakerHeaderText: {

    marginTop: '0px',
    fontFamily: 'Gotham Pro Bold',

    backgroundColor: '#FF414A',

    color: 'white',
    textAlign: 'center',
    marginBottom: '0px',

    [theme.breakpoints.up('xs')]: {

      width: '15.5vw',
      height: '5.3vw',
      fontSize: '3vw',
      lineHeight: '5.7vw',
    },

    [theme.breakpoints.up('sm')]: {

      width: '11vw',
      height: '3vw',
      fontSize: '1.7vw',
      lineHeight: '3.3vw',
    },

    [theme.breakpoints.up('md')]: {

      width: '7vw',
      height: '2.3vw',
      fontSize: '1.4vw',
      lineHeight: '2.3vw',
    },

    [theme.breakpoints.up('lg')]: {

      width: '4.5vw',
      height: '1.6vw',
      fontSize: '1vw',
      lineHeight: '1.7vw',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '20px',
      lineHeight: '30px',
      height: '31px',
      width: '93px',
    },

  },

  sessionNameText: {

    fontFamily: 'Gotham Pro Black',
    // fontWeight: 700,

    color: 'white',

    marginBottom: '38px',

    [theme.breakpoints.up('xs')]: {
      fontSize: '6vw',
      lineHeight: '6.9vw',
      marginTop: '17px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '2.8vw',
      lineHeight: '3.5vw',
      marginTop: '11px',
      width: '80%',
      marginBottom: '17px',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '2.2vw',
      lineHeight: '2.5vw',
      marginTop: '14px',
      width: '80%',
      marginBottom: '21px',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '2vw',
      lineHeight: '2.4vw',
      marginTop: '17px',
      width: '80%',
      marginBottom: '38px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '36px',
      lineHeight: '51px',
      marginTop: '41px',
      width: '80%',
      marginBottom: '38px',
      paddingLeft: '33px',
    },

  },

  sessionLetterTextLong: {

    marginTop: '0px',
    fontFamily: 'Gotham Pro Bold',

    backgroundColor: '#FF414A',

    color: 'white',
    textAlign: 'center',
    marginBottom: '0px',

    [theme.breakpoints.up('xs')]: {
      width: '48vw',
      height: '4.8vw',
      fontSize: '4vw',
      lineHeight: '4.8vw',

    },

    [theme.breakpoints.up('sm')]: {
      width: '23vw',
      height: '3.8vw',
      fontSize: '2vw',
      lineHeight: '4vw',

    },

    [theme.breakpoints.up('md')]: {
      width: '17vw',
      height: '2.8vw',
      fontSize: '1.5vw',
      lineHeight: '3vw',

    },

    [theme.breakpoints.up('lg')]: {
      width: '14vw',
      height: '1.8vw',
      fontSize: '1vw',
      lineHeight: '1.8vw',

    },

    [theme.breakpoints.up('xl')]: {
      width: '500px',
      height: '71px',
      fontSize: '42px',
      lineHeight: '71px',
    },

  },

  sessionLetterText: {

    marginTop: '0px',
    fontFamily: 'Gotham Pro Bold',

    backgroundColor: '#FF414A',

    color: 'white',
    textAlign: 'center',
    marginBottom: '0px',

    [theme.breakpoints.up('xs')]: {
      width: '30vw',
      height: '4.8vw',
      fontSize: '4vw',
      lineHeight: '4.8vw',

    },

    [theme.breakpoints.up('sm')]: {
      width: '16vw',
      height: '3.8vw',
      fontSize: '2vw',
      lineHeight: '4vw',

    },

    [theme.breakpoints.up('md')]: {
      width: '12vw',
      height: '2.8vw',
      fontSize: '1.5vw',
      lineHeight: '3vw',

    },

    [theme.breakpoints.up('lg')]: {
      width: '8vw',
      height: '1.8vw',
      fontSize: '1vw',
      lineHeight: '1.8vw',
    },

    [theme.breakpoints.up('xl')]: {
      width: '268px',
      height: '71px',
      fontSize: '42px',
      lineHeight: '71px',
    },

  },

  mainSessionInfoContainer: {

  },

  textCenter: {

    textAlign: 'center',

  },

  lightBlueBckg: {

    backgroundColor: '#1B3074',
    width: '100%',

    [theme.breakpoints.up('xs')]: {
      padding: '0 22px',
      paddingTop: '18px',
      paddingBottom: '42px',
      position: 'relative',
      top: '-1px',
    },

    [theme.breakpoints.up('md')]: {
      padding: '0 56px',
      paddingTop: '31px',
      paddingBottom: '23px',
      top: '0px',
    },

    [theme.breakpoints.up('lg')]: {
      padding: '0 67px',
      paddingTop: '31px',
      paddingBottom: '30px',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '0 110px',
      paddingTop: '41px',
      paddingBottom: '41px',
    },

  },

  darkBlueBckg: {

    backgroundColor: '#00124D',
    height: 'auto',

    width: '100%',

    [theme.breakpoints.up('xs')]: {
      padding: '0 22px',
      paddingTop: '14px',
    },

    [theme.breakpoints.up('md')]: {
      padding: '0 56px',
      paddingTop: '17px',
    },

    [theme.breakpoints.up('lg')]: {
      padding: '0 67px',
      paddingTop: '34px',
      minHeight: '190px',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '0 110px',
      paddingTop: '39px',
      minHeight: '190px',
    },

  },

  redLeftLineP: {

    marginTop: '0px',

  },

  redLeftLine: {

    [theme.breakpoints.up('xl')]: {
      marginRight: '18px',
      width: '18px',
      height: '52px',
      backgroundColor: '#FF414A',
      border: 'none',
      marginTop: '0px',
      position: 'relative',
      bottom: '5px',
    },

  },

  speakerThemeWord: {

    fontFamily: 'Open Sans',
    fontWeight: 300,

    color: 'white',
    marginTop: '0px',

    [theme.breakpoints.up('xs')]: {
      fontSize: '5vw',
      lineHeight: '5.8vw',
      marginBottom: '50px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '2.4vw',
      lineHeight: '3.5vw',
      marginBottom: '50px',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '2vw',
      lineHeight: '3vw',
      marginBottom: '50px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.9vw',
      lineHeight: '2.8vw',
      marginBottom: '50px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '24px',
      lineHeight: '33px',
      marginBottom: '21px',

    },

  },

  speakerTheme: {

    fontFamily: 'Gotham Pro Light',
    fontWeight: 400,

    color: 'white',
    marginTop: '0px',

    [theme.breakpoints.up('xs')]: {
      fontSize: '5vw',
      lineHeight: '5.8vw',
      marginBottom: '50px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '2.4vw',
      lineHeight: '3.5vw',
      marginBottom: '50px',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '2vw',
      lineHeight: '3vw',
      marginBottom: '50px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.9vw',
      lineHeight: '2.8vw',
      marginBottom: '50px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '29px',
      lineHeight: '40px',
      marginBottom: '105px',

    },

  },

  rateSpeakerText: {

    fontFamily: 'Open Sans',
    fontWeight: 300,

    color: 'white',
    marginTop: '0px',

    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
      lineHeight: '20px',
      marginBottom: '14px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '2vw',
      lineHeight: '2.5vw',
      marginBottom: '7px',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.7vw',
      lineHeight: '2.3vw',
      marginBottom: '7px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3vw',
      lineHeight: '1.7vw',
      marginBottom: '18px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '24px',
      lineHeight: '33px',
      marginBottom: '11px',
    },

  },

  loadPresenationButton: {

    fontFamily: 'Gotham Pro Medium',

    backgroundColor: '#FF414A',

    color: 'white',
    textAlign: 'center',
    borderRadius: '0px',
    textTransform: 'initial',
    transition: '0.2s',

    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
      height: '56px',
      width: '250px',
      marginTop: '0px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.9vw',
      height: '7.7vw',
      width: '100%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.3vw',
      height: '3.7vw',
      width: '82%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1vw',
      height: '3.5vw',
      width: '100%',
      marginTop: '0px',
      marginBottom: '0px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '17px',
      lineHeight: '19px',
      height: '53px',
      width: '286px',
      marginTop: '15px',
      marginBottom: '0px',

    },

    '&:hover': {
      backgroundColor: '#1B3074',
      border: '1px solid #FF414A',
      color: '#FF414A',
      transition: '0.2s',
    },

  },

  sendContactsButton: {

    fontFamily: 'Gotham Pro Medium',

    backgroundColor: '#8A8A8A',

    color: 'white',
    textAlign: 'center',
    borderRadius: '0px',
    textTransform: 'initial',

    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
      height: '56px',
      width: '250px',
      marginTop: '0px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.9vw',
      height: '7.7vw',
      width: '100%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.3vw',
      height: '3.7vw',
      width: '82%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1vw',
      height: '3.5vw',
      width: '100%',
      marginTop: '0px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '17px',
      lineHeight: '19px',
      height: '53px',
      width: '286px',
      marginTop: '11px',
    },

    '&:hover': {
      backgroundColor: '#1B3074',
      border: '1px solid #8A8A8A',
      color: '#8A8A8A',
      transition: '0.2s',
    },

  },

  sendContactsButtonDisabled: {

    fontFamily: 'Gotham Pro Medium',

    backgroundColor: '#24A553',

    color: 'white',
    textAlign: 'center',
    borderRadius: '0px',
    textTransform: 'initial',
    pointerEvents: 'none',

    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
      height: '56px',
      width: '250px',
      marginTop: '0px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.9vw',
      height: '7.7vw',
      width: '100%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.3vw',
      height: '3.7vw',
      width: '82%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1vw',
      height: '3.5vw',
      width: '100%',
      marginTop: '0px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '17px',
      lineHeight: '19px',
      height: '53px',
      width: '286px',
      marginTop: '11px',
    },

  },

  goToZoomButton: {

    fontFamily: 'Gotham Pro Medium',

    backgroundColor: '#2D8CFF',

    color: 'white',
    textAlign: 'center',
    borderRadius: '0px',
    textTransform: 'initial',

    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
      height: '56px',
      width: '250px',
      marginTop: '0px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.9vw',
      height: '7.7vw',
      width: '100%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.3vw',
      height: '3.7vw',
      width: '82%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1vw',
      height: '3.5vw',
      width: '100%',
      marginTop: '0px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '17px',
      lineHeight: '19px',
      height: '53px',
      width: '286px',
      marginTop: '11px',
    },

    '&:hover': {
      backgroundColor: '#1B3074',
      border: '1px solid #2D8CFF',
      color: '#2D8CFF',
      transition: '0.2s',
    },

  },

}));

export default useStyles;
