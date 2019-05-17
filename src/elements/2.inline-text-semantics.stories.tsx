import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

const stories = storiesOf('HTML elements|Inline text semantics', module);

stories.add('Abbreviation', () => (
  <p>
    In my dream last night, I saw{' '}
    <abbr title="John Ronald Reuel">J. R. R.</abbr> Tolkien and George{' '}
    <abbr title="Raymond Richard">R. R.</abbr> Martin hanging out on Sunset{' '}
    <abbr title="Boulevard">Blvd</abbr>.
  </p>
));

stories.add('Anchor', () => (
  <ul>
    <li>
      <a href="https://www.brooklynmuseum.org/">Visit Brooklyn Museum</a>
    </li>
    <li>
      <a href="mailto:information@brooklynmuseum.org">Email Brooklyn Museum</a>
    </li>
    <li>
      <a href="tel:+17186385000">Call Brooklyn Museum</a>
    </li>
  </ul>
));

stories.add('Bring attention to', () => (
  <p>
    The two most popular science courses offered by the school are{' '}
    <b>chemistry</b> (the study of chemicals and the composition of substances)
    and <b>physics</b> (the study of the nature and properties of matter and
    energy).
  </p>
));

stories.add('Cite', () => (
  <blockquote>
    <p>
      It was a bright cold day in April, and the clocks were striking thirteen.
    </p>
    <footer>
      First sentence in{' '}
      <cite>
        <a href="http://www.george-orwell.org/1984/0.html">
          <i>Nineteen Eighty-Four</i>
        </a>
      </cite>{' '}
      by George Orwell (Part 1, Chapter 1).
    </footer>
  </blockquote>
));

stories.add('Code', () => (
  <p>
    The <code>push()</code> method adds one or more elements to the end of an
    array and returns the new length of the array.
  </p>
));

stories.add('Definition', () => (
  <p>
    A <dfn>validator</dfn> is a program that checks for syntax errors in code or
    documents.
  </p>
));

stories.add('Deleted text', () => (
  <blockquote>
    Why then ’tis none to you; for there is nothing either good or bad, but
    thinking makes it so<del dateTime="1602-09-02">-so</del>.
  </blockquote>
));

stories.add('Distinction', () => (
  <p>
    <i>Musa</i> is one of two or three genera in the family <i>Musaceae</i>; it
    includes bananas and plantains.
  </p>
));

stories.add('Emphasis', () => (
  <p>
    Get out of bed <em>now</em>!
  </p>
));

stories.add('Inline quotation', () => (
  <p>
    When Dave asks HAL to open the pod bay door, HAL answers:{' '}
    <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">
      I’m sorry, Dave. I’m afraid I can’t do that.
    </q>
  </p>
));

stories.add('Inserted text', () => (
  <div>
    <p>“You’re late!”</p>
    <ins dateTime="2017-07-07">
      <p>“A wizard is never late.”</p>
    </ins>
  </div>
));

stories.add('Keyboard input', () => (
  <p>
    Press <kbd>Command</kbd> + <kbd>S</kbd> on Mac or <kbd>Ctrl</kbd> +{' '}
    <kbd>S</kbd> on Windows to save this page.
  </p>
));

stories.add('Marked text', () => (
  <blockquote>
    <p>
      It is a dark time for the Rebellion. Although the Death Star has been
      destroyed, <mark>Imperial</mark> troops have driven the Rebel forces from
      their hidden base and pursued them across the galaxy.
    </p>

    <p>
      Evading the dreaded <mark>Imperial</mark> Starfleet, a group of freedom
      fighters led by Luke Skywalker have established a new secret base on the
      remote ice world of Hoth.
    </p>
  </blockquote>
));

stories.add('Sample', () => (
  <div>
    <p>
      When the process is complete, the utility will output the text{' '}
      <samp>
        Scan complete. Found <var>N</var> results.
      </samp>{' '}
      You can then proceed to the next step.
    </p>
  </div>
));

stories.add('Small', () => (
  <blockquote>
    Eating greens is a special treat. It makes long ears and great big feet.{' '}
    <small>But it sure is awful stuff to eat.</small>
  </blockquote>
));

stories.add('Strikethrough', () => (
  <div>
    <p>
      <s>There will be a few tickets available at the box office tonight.</s>
    </p>
    <p>SOLD OUT!</p>
  </div>
));

stories.add('Strong', () => (
  <p>
    Before proceeding, <strong>make sure you put on your safety goggles</strong>
    .
  </p>
));

stories.add('Subscript', () => (
  <p>
    Almost every developer’s favorite molecule is C<sub>8</sub>H<sub>10</sub>N
    <sub>4</sub>O<sub>2</sub>, also known as “caffeine.”
  </p>
));

stories.add('Superscript', () => (
  <div>
    <p>
      The <b>Pythagorean theorem</b> is often expressed as the following
      equation:
    </p>

    <p>
      <var>a</var>
      <sup>2</sup> + <var>b</var>
      <sup>2</sup> = <var>c</var>
      <sup>2</sup>
    </p>
  </div>
));

stories.add('Time', () => (
  <div>
    <p>
      The Cure will be celebrating their 40th anniversary on{' '}
      <time dateTime="2018-07-07">July 7</time> in London’s Hyde Park.
    </p>

    <p>
      The concert starts at <time dateTime="20:00">20:00</time> and you’ll be
      able to enjoy the band for at least <time dateTime="PT2H30M">2h 30m</time>
      .
    </p>
  </div>
));

stories.add('Unarticulated annotation', () => (
  <p>
    You could use this element to highlight <u>speling</u> mistakes, so the
    writer can <u>corect</u> them.
  </p>
));

stories.add('Variable', () => (
  <p>
    The volume of a box is <var>l</var> × <var>w</var> × <var>h</var>, where{' '}
    <var>l</var> represents the length, <var>w</var> the width and <var>h</var>{' '}
    the height of the box.
  </p>
));
