import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

const stories = storiesOf('Button', module);

stories.add('with text', () => <Button>Hello Button</Button>);

stories.add('with some emoji', () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
));
