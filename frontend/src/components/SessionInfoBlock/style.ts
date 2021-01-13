import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({

  sessionNameText: {

    fontFamily: 'Open Sans',
    fontWeight: 700,
    fontSize: '42px',
    lineHeight: '27px',
    color: 'white',

  },

  sessionLetterText: {

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

  lightBlueBckg: {

    backgroundColor: '#1B3074',
    width: '100%',
    padding: '0 110px',

  },

  darkBlueBckg: {
    paddingTop: '34px',
    padding: '0 110px',
    backgroundColor: '#00124D',
    height: '190px',
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

}));

export default useStyles;
