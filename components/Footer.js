import { makeStyles, Typography, Link } from '@material-ui/core';
import NextLink from 'next/link';

import Copyright from './Copyright.js';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center">
        Footer
      </Typography>
      <Typography align="center" color="textSecondary">
        A general purpose footer!
      </Typography>
      <Typography align="center">
        <NextLink href="/about">Go To About Page</NextLink>
      </Typography>
      <Copyright />
    </footer>
  );
}
