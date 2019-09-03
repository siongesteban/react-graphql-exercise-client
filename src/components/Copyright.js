import React from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://github.com/siongesteban/react-graphql-exercise-client">
      react-graphql-exercise-client
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);
