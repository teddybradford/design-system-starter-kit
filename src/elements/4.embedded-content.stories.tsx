import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

const stories = storiesOf('HTML elements|Embedded content', module);

stories.add('Inline frame', () => (
  <iframe
    title="The Old Royal Observatory Garden"
    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.003181099891662598%2C51.47652178367777%2C0.00035941600799560547%2C51.47827251203983&layer=mapnik"
  />
));

stories.add('Object', () => (
  <object
    type="application/pdf"
    data="https://interactive-examples.mdn.mozilla.net/media/examples/In-CC0.pdf"
  >
    <cite>In CC0</cite> sheet music
  </object>
));
