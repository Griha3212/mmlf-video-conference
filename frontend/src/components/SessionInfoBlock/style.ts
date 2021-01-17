import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({

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
    fontSize: '22px',
    lineHeight: '31px',
    backgroundColor: '#FF414A',
    height: '34px',
    width: '250px',
    color: 'white',
    textAlign: 'center',
    marginBottom: '0px',

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

  },

  rateSpeakerText: {

    fontFamily: 'Open Sans',
    fontWeight: 300,
    fontSize: '15px',
    lineHeight: '28px',
    color: 'white',
    marginTop: '0px',

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
