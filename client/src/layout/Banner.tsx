import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { format, differenceInDays } from 'date-fns';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2,0),
    '& *': {
        margin: theme.spacing(0.5,0)
    }
  },
  names: {
      fontFamily: "'Great Vibes', 'cursive'",
      fontSize: '10vw'
  },
  date: {
    textDecoration: 'uppercase',
    fontSize: '2vw'
  }
}));



const Banner = () => {
    const classes = useStyles();

    const weddingDate = new Date(2023,3,22);
    const days = differenceInDays(weddingDate, new Date());
    return (
        <div className={classes.container}>
            <span className={classes.names}>Bianca & Michael</span>
            <span className={classes.date}>{`${format(weddingDate, 'MMMM do, y')} • Fredricksburg, Texas`}</span>
            <span className={classes.date}>{days === 0 ? 'Today is the day!' : days > 0 ? `${days} days till we say "I Do"` : `${days} days happily married`}</span>
        </div>
    )
}

export default Banner;