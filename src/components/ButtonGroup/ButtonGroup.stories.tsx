import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';

const stories = storiesOf('Button Group', module);

stories.add('horizontal', () => (
  <ButtonGroup>
    <Button>Hello Button</Button>

    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  </ButtonGroup>
));
