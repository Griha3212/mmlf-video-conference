import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({

  sessionNameText: {

    fontFamily: 'Open Sans Bold',
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

  },

  mainSessionInfoContainer: {

  },

  lightBlueBckg: {

    backgroundColor: '#1B3074',

  },

  darkBlueBckg: {
    paddingTop: '34px',
    padding: '0 110px',
    backgroundColor: '#00124D',

  },

}));

export default useStyles;
