import React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('HTML elements|Image and multimedia', module);

stories.add('Audio', () => (
  <audio
    controls
    src="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
  />
));

stories.add('Image', () => (
  <img
    src="https://source.unsplash.com/WfoYdqDDf9I/480x480"
    alt="Grapefruit slice atop a pile of other slices"
  />
));

stories.add('Picture', () => (
  <picture>
    <source
      srcSet="https://source.unsplash.com/sW8psg40WXY/480x240"
      media="(min-width: 960px)"
    />
    <img
      src="https://source.unsplash.com/sW8psg40WXY/240x240"
      alt="Surfer riding a wave"
    />
  </picture>
));

stories.add('Video', () => (
  <video controls>
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm"
      type="video/webm"
    />
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/examples/flower.mp4"
      type="video/mp4"
    />
  </video>
));
