import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import NextLink from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <NextLink href="/">
              <MenuIcon />
            </NextLink>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Davees General Purpose Project Template
          </Typography>
          <Button color="inherit">
            <NextLink href="/signin">Login</NextLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
