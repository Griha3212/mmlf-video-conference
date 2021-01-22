import { makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

  cursorPointer: {

    cursor: 'pointer',

  },

  bottomLink: {

    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },

  },

  textAlignRight: {

    textAlign: 'right',

  },

  footerTextDate: {

    fontFamily: 'Gotham Pro Light',

    marginTop: '0px',
    marginBottom: '0px',

    color: 'white',

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.2vw',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '24px',
      lineHeight: '27px',
    },

  },

  socialFooterImg: {

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.2vw',
    },
    [theme.breakpoints.up('xl')]: {
      width: 'auto',
    },

  },

  footerContainerInner: {

    padding: '0 220px',

  },

  footerContainer: {

    backgroundColor: '#00124D',
    borderTop: '33px solid #FF414A',
    marginTop: '100px',
    height: '220px',

  },

  imgFluid: {

    width: '100%',
    height: 'auto',

  },

  partnersContainer: {

    marginTop: '120px',

  },

  mainVideoContainer: {

    height: '720px',

  },

  channelContainer: {

    maxWidth: '29%',
    cursor: 'pointer',
    flexDirection: 'column',
    flexWrap: 'nowrap',

  },

  chooseChannelSessionLetter: {

    fontFamily: 'Open Sans',
    fontWeight: 700,
    color: 'black',
    marginTop: '0px',
    marginBottom: '0px',
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.4vw',
      lineHeight: '3.3vw',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '48px',
      lineHeight: '65px',
    },

  },

  chooseChannelSessionDescription: {

    fontFamily: 'Open Sans',
    fontWeight: 400,

    color: 'black',
    marginTop: '0px',
    marginBottom: '0px',
    textAlign: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.1vw',
      lineHeight: '1.5vw',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '25px',
      lineHeight: '34px',
    },

  },

  mmlfFooterLogo: {

    [theme.breakpoints.up('lg')]: {
      width: '11.5vw',
    },
    [theme.breakpoints.up('xl')]: {
      width: 'auto',
    },

  },

  channelContainerBottomPart: {

    backgroundColor: '#ECF1F1',

    [theme.breakpoints.up('lg')]: {
      padding: '30px 0px',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '44px 0px',
    },

  },

  mainContainerBckg: {
    padding: '0 110px',
  },

  speakersBlockHeader: {

    fontFamily: 'Gotham Pro Black',
    fontSize: '70px',
    lineHeight: '79px',
    marginTop: '0px',
    textTransform: 'uppercase',
    color: '#00124D',

    [theme.breakpoints.up('xs')]: {
      fontSize: '3.3vw',

    },

  },

  changeSessionMainContainer: {

    marginTop: '120px',

  },
  innerContainer: {

    paddingLeft: '120px',
    paddingRight: '120px',
    width: '100%',
    position: 'relative',
    zIndex: 2,

    [theme.breakpoints.up('xs')]: {
      paddingLeft: '24px',
      paddingRight: '24px',

    },

  },

  redBckgContainer: {

    backgroundColor: '#FF414A',
    height: '1034px',
    position: 'absolute',
    zIndex: 1,

  },

  myAuto: {

    marginTop: 'auto',
    marginBottom: 'auto',

  },

  topPart: {

    height: '120px',

  },

  conferenceTopText: {

    fontFamily: 'Gotham Pro Bold',
    textTransform: 'uppercase',
    color: 'white',
    // marginLeft: '7vw',

    [theme.breakpoints.up('xs')]: {
      fontSize: '3.8vw',
      textAlign: 'left',
      // lineHeight: '56px',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '3.8vw',
      // lineHeight: '56px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '4vw',
      lineHeight: '6vw',
    },

  },
  darkBlueBckgTop: {
    backgroundColor: '#00124D',
  },
  mmlfTopLogoImg: {

    position: 'relative',
    top: '5px',
    cursor: 'pointer',

    [theme.breakpoints.up('xs')]: {
      width: '31vw',
      // height: '38px',
    },

    [theme.breakpoints.up('lg')]: {
      width: '18vw',
      // height: '38px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '374px',
      height: '61px',
    },

  },

  loadProgramButton: {

    // borderWidth: '1px',
    // borderColor: '#707070 !important',
    borderRadius: '0px',
    fontFamily: 'Gotham Pro Medium',

    whiteSpace: 'nowrap',
    backgroundColor: '#FF414A',
    color: 'white',
    border: 'none',

    // textTransform: 'capitalize',
    textTransform: 'initial',
    // marginLeft: '6vw',
    marginTop: '6px',
    transition: '0.2s',
    left: '2vw',
    '&:hover': {
      backgroundColor: '#00124D',
      border: '1px solid #FF414A',
      color: '#FF414A',
      transition: '0.2s',
    },

    [theme.breakpoints.up('lg')]: {
      width: '16.4vw',
      height: '3vw',
      fontSize: '1.1vw',
      lineHeight: '16px',

    },
    [theme.breakpoints.up('xl')]: {
      width: '340px',
      height: '60px',
      fontSize: '24px',
      lineHeight: '27px',
    },

  },
  mainContainer: {

    // marginTop: '20px',
    borderTop: '1px solid #707070',
    borderBottom: '1px solid #707070',

    [theme.breakpoints.up('xs')]: {
      paddingLeft: '35px',
      paddingRight: '35px',

    },

    [theme.breakpoints.up('sm')]: {
      paddingLeft: '35px',
      paddingRight: '35px',

    },

    [theme.breakpoints.up('lg')]: {
      paddingLeft: '120px',
      paddingRight: '120px',

    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: '120px',
      paddingRight: '120px',
    },

  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  wrapper: {
    position: 'relative',
  },
}));

export default useStyles;
