import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  rateSpeakerStarsImg: {

    fontSize: '2.5rem',
    color: '#FF414A',

  },

  speakerInfoBlock: {

  },

  speakerAvatarImg: {

    borderRadius: '50%',
    border: '4px solid white',
  },

  speakerFullCompanyText: {

    fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '20px',
    color: 'white',
    marginTop: '5px',
    // marginBottom: '38px',

  },

  speakerFullNameText: {

    fontFamily: 'Open Sans',
    fontWeight: 600,
    fontSize: '30px',
    lineHeight: '41px',
    color: 'white',
    marginTop: '5px',
    marginBottom: '0px',

  },

  speakerHeaderText: {

    marginTop: '0px',
    fontFamily: 'Gotham Pro Bold',
    fontSize: '20px',
    lineHeight: '30px',
    backgroundColor: '#FF414A',
    height: '31px',
    width: '93px',
    color: 'white',
    textAlign: 'center',
    marginBottom: '0px',

  },

  sessionNameText: {

    fontFamily: 'Open Sans',
    fontWeight: 700,
    fontSize: '42px',
    lineHeight: '51px',
    color: 'white',
    marginTop: '32px',
    marginBottom: '38px',

  },

  sessionLetterTextLong: {

    marginTop: '0px',
    fontFamily: 'Gotham Pro Bold',

    backgroundColor: '#FF414A',

    color: 'white',
    textAlign: 'center',
    marginBottom: '0px',

    [theme.breakpoints.up('lg')]: {
      width: '145px',
      height: '22px',
      fontSize: '13px',
      lineHeight: '21px',

    },
    [theme.breakpoints.up('xl')]: {
      width: '250px',
      height: '34px',
      fontSize: '22px',
      lineHeight: '31px',
    },

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
    marginBottom: '0px',

  },

  mainSessionInfoContainer: {

  },

  textCenter: {

    textAlign: 'center',

  },

  lightBlueBckg: {

    backgroundColor: '#1B3074',
    width: '100%',
    padding: '0 110px',
    paddingTop: '61px',
    paddingBottom: '80px',

  },

  darkBlueBckg: {
    paddingTop: '34px',
    padding: '0 110px',
    backgroundColor: '#00124D',
    height: 'auto',
    minHeight: '190px',
    width: '100%',
  },

  speakerTheme: {

    fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: '36px',
    lineHeight: '51px',
    color: 'white',
    marginTop: '0px',
    marginBottom: '60px',

  },

  rateSpeakerText: {

    fontFamily: 'Open Sans',
    fontWeight: 300,
    fontSize: '21px',
    lineHeight: '28px',
    color: 'white',
    marginTop: '0px',
    marginBottom: '28px',

  },

  loadPresenationButton: {

    fontFamily: 'Gotham Pro Medium',
    fontSize: '21px',
    lineHeight: '23px',
    backgroundColor: '#FF414A',
    height: '53px',
    width: '302px',
    color: 'white',
    textAlign: 'center',
    borderRadius: '0px',
    textTransform: 'initial',
    marginTop: '15px',

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
    textTransform: 'initial',
    marginTop: '11px',

  },

}));

export default useStyles;
