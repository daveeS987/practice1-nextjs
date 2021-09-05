import Typography from '@material-ui/core/Typography';
import NextLink from 'next/link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <NextLink href="/about" passHref>
        Davee Sok Template
      </NextLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
