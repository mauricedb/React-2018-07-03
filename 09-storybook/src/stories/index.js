import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { checkA11y } from '@storybook/addon-a11y';
import { Button, Welcome } from '@storybook/react/demo';

import MovieListItem from '../MovieListItem';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('MovieListItem', module)
  .addDecorator(checkA11y)
  .add('minimal', () => (
    <MovieListItem
      title="The title"
      poster_path=""
      overview="The mobie overview"
      vote_average={5}
    />
  ))
  .add('No title', () => (
    <MovieListItem
      title=""
      poster_path=""
      overview="The mobie overview"
      vote_average={5}
    />
  ))
  .add('Long title', () => (
    <MovieListItem
      title="kjsdfkjsdvkjsbdvkjsdkj skdjfskjdvhskdjds ajkdfhkjsdvhksjdkjh aldfksjdvksjdh"
      poster_path=""
      overview="The mobie overview"
      vote_average={5}
    />
  ));
