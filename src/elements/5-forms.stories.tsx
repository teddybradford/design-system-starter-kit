import React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('HTML elements|Forms', module);

stories.add('Button', () => <button type="button">Add to favorites</button>);

stories.add('Input (checkbox)', () => (
  <fieldset>
    <legend>Choose your monster’s features</legend>
    <label htmlFor="scales">
      <input type="checkbox" id="scales" name="scales" /> Scales
    </label>
    <br />
    <label htmlFor="horns">
      <input type="checkbox" id="horns" name="horns" /> Horns
    </label>
  </fieldset>
));

stories.add('Input (color)', () => (
  <fieldset>
    <legend>Choose your monster’s colors</legend>
    <div>
      <label htmlFor="head">
        <input type="color" id="head" name="head" defaultValue="#e66465" /> Head
      </label>
    </div>
    <div>
      <label htmlFor="body">
        <input type="color" id="body" name="body" defaultValue="#f6b73c" /> Body
      </label>
    </div>
  </fieldset>
));

stories.add('Input (data list)', () => (
  <label htmlFor="ice-cream-choice">
    Choose a flavor:{' '}
    <input
      list="ice-cream-flavors"
      id="ice-cream-choice"
      name="ice-cream-choice"
    />
    <datalist id="ice-cream-flavors">
      <option value="Chocolate" />
      <option value="Coconut" />
      <option value="Mint" />
      <option value="Strawberry" />
      <option value="Vanilla" />
    </datalist>
  </label>
));

stories.add('Input (date)', () => (
  <label htmlFor="start">
    Start date:{' '}
    <input
      type="date"
      id="start"
      name="trip-start"
      value="2018-07-22"
      min="2018-01-01"
      max="2018-12-31"
    />
  </label>
));

stories.add('Input (date/time)', () => (
  <label htmlFor="meeting-time">
    Choose a time for your appointment:{' '}
    <input
      type="datetime-local"
      id="meeting-time"
      name="meeting-time"
      value="2018-06-12T19:30"
      min="2018-06-07T00:00"
      max="2018-06-14T00:00"
    />
  </label>
));

stories.add('Input (email)', () => (
  <label htmlFor="email">
    Enter your email address: <input type="email" id="email" required />
  </label>
));

stories.add('Input (file)', () => (
  <label htmlFor="avatar">
    Choose a profile picture:{' '}
    <input type="file" id="avatar" name="avatar" accept="image/*" />
  </label>
));

stories.add('Input (month)', () => (
  <label htmlFor="start">
    Start month:{' '}
    <input type="month" id="start" name="start" min="2018-03" value="2018-05" />
  </label>
));

stories.add('Input (number)', () => (
  <label htmlFor="tentacles">
    Number of tentacles (10-100):{' '}
    <input type="number" id="tentacles" name="tentacles" min="10" max="100" />
  </label>
));

stories.add('Input (password)', () => (
  <form>
    <fieldset>
      <legend>Enter your credentials</legend>
      <div>
        <label htmlFor="username">
          Username: <input type="text" id="username" name="username" required />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:{' '}
          <input type="password" id="password" name="password" required />
        </label>
      </div>
      <input type="submit" value="Sign in" />
    </fieldset>
  </form>
));

stories.add('Input (radio)', () => (
  <fieldset>
    <legend>Choose your favorite monster</legend>
    <label htmlFor="kraken">
      <input type="radio" id="kraken" name="monster" /> Kraken
    </label>
    <br />
    <label htmlFor="sasquatch">
      <input type="radio" id="sasquatch" name="monster" /> Sasquatch
    </label>
    <br />
    <label htmlFor="mothman">
      <input type="radio" id="mothman" name="monster" /> Mothman
    </label>
  </fieldset>
));

stories.add('Input (range)', () => (
  <fieldset>
    <legend>Audio settings</legend>
    <div>
      <label htmlFor="master">
        <input type="range" id="master" name="master" /> Master
      </label>
    </div>
    <div>
      <label htmlFor="cowbell">
        <input
          type="range"
          id="cowbell"
          name="cowbell"
          min={0}
          max={100}
          step={10}
          defaultValue="90"
        />{' '}
        Cowbell
      </label>
    </div>
  </fieldset>
));

stories.add('Input (search)', () => (
  <form>
    <label htmlFor="site-search">
      Search the site:{' '}
      <input
        type="search"
        id="site-search"
        name="q"
        aria-label="Search through site content"
      />
    </label>
    <button type="button">Search</button>
  </form>
));

stories.add('Input (submit)', () => (
  <input type="submit" value="Send request" />
));

stories.add('Input (telephone)', () => (
  <label htmlFor="phone">
    Enter your phone number: <input type="tel" id="phone" name="phone" />
  </label>
));

stories.add('Input (text)', () => (
  <label htmlFor="name">
    Name (4 to 8 characters):{' '}
    <input
      type="text"
      id="name"
      name="name"
      required
      minLength={4}
      maxLength={8}
      size={10}
    />
  </label>
));

stories.add('Input (time)', () => (
  <label htmlFor="appointment">
    Choose a time for your appointment:{' '}
    <input type="time" id="appointment" name="appointment" />
  </label>
));

stories.add('Input (URL)', () => (
  <label htmlFor="url">
    Enter a URL:{' '}
    <input
      type="url"
      name="url"
      id="url"
      placeholder="https://www.mozilla.org/"
    />
  </label>
));

stories.add('Input (week)', () => (
  <form>
    <label htmlFor="week">
      What week would you like to start?{' '}
      <input id="week" type="week" name="week" />
    </label>
  </form>
));

stories.add('Meter', () => (
  <label htmlFor="fuel">
    Fuel level:{' '}
    <meter
      id="fuel"
      min={0}
      max={100}
      low={33}
      high={66}
      optimum={80}
      value={60}
    >
      60/100
    </meter>
  </label>
));

stories.add('Progress', () => (
  <label htmlFor="progress">
    File progress:{' '}
    <progress id="progress" max="100" value="70">
      70%
    </progress>
  </label>
));

stories.add('Select menu', () => (
  <label htmlFor="dinosaur">
    Choose a dinosaur:{' '}
    <select id="dinosaur">
      <option hidden disabled selected />
      <optgroup label="Theropods">
        <option>Tyrannosaurus</option>
        <option>Velociraptor</option>
        <option>Deinonychus</option>
      </optgroup>
      <optgroup label="Sauropods">
        <option>Diplodocus</option>
        <option>Saltasaurus</option>
        <option>Apatosaurus</option>
      </optgroup>
    </select>
  </label>
));

stories.add('Text area', () => (
  <label htmlFor="story">
    Tell us your story:
    <br />
    <textarea
      id="story"
      name="story"
      defaultValue="It was a dark and stormy night…"
    />
  </label>
));
