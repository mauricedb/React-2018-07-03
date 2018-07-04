import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const SingleQuote = ({ joke }) => {
  return (
    <Card style={{ width: 200, margin: 20 }}>
      <CardContent>
        <Typography>{joke.joke}</Typography>
      </CardContent>
    </Card>
  );
};

export default SingleQuote;
