import { makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

  stickyCentralMenu: {

    position: 'fixed',
    left: '36%',

  },

  activateSelectedSpeakerP: {

    marginTop: '0px',

  },

  activeSpeakerText: {

    fontSize: '22px',
    marginTop: '0px',
    position: 'fixed',
    left: '68%',

  },

  sessionLetter: {

    fontSize: '24px',
    marginTop: '5px',
    textAlign: 'center',
  },

  speakerButtonActive: {

    marginBottom: '30px',
    backgroundColor: 'green',
    color: 'white',

  },

  textCenter: {

    textAlign: 'center',

  },

  speakerButton: {

    marginBottom: '30px',

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
