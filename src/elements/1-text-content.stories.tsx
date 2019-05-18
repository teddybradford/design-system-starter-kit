import React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('HTML elements|Text content', module);

stories.add('Block quotation', () => (
  <blockquote cite="https://tools.ietf.org/html/rfc1149">
    <p>
      Avian carriers can provide high delay, low throughput, and low altitude
      service. The connection topology is limited to a single point-to-point
      path for each carrier, used with standard carriers, but many carriers can
      be used without significant interference with each other, outside of early
      spring. This is because of the 3D ether space available to the carriers,
      in contrast to the 1D ether used by IEEE802.3. The carriers have an
      intrinsic collision avoidance system, which increases availability.
    </p>
  </blockquote>
));

stories.add('Contact address', () => (
  <div>
    <p>Visit MoMA at:</p>

    <address>
      11 West 53rd Street
      <br />
      New York, NY 10019
      <br />
      <a href="tel:+12127089400">(212) 708-9400</a>
    </address>
  </div>
));

stories.add('Details and summary', () => (
  <details>
    <summary>
      I have keys but no locks. I have space but no room. You can enter but
      can’t leave. What am I?
    </summary>
    A keyboard.
  </details>
));

stories.add('Description list', () => (
  <div>
    <p>Cryptids of Cornwall:</p>

    <dl>
      <dt>Beast of Bodmin</dt>
      <dd>A large feline inhabiting Bodmin Moor.</dd>

      <dt>Morgawr</dt>
      <dd>A sea serpent.</dd>

      <dt>Owlman</dt>
      <dd>A giant owl-like creature.</dd>
    </dl>
  </div>
));

stories.add('Figure', () => (
  <figure>
    <img
      src="https://source.unsplash.com/WfZ4WCuNtlg/480x480"
      width={480}
      height={480}
      alt="Three elephants walking in line on patchy grass"
    />
    <figcaption>Elephants search for water.</figcaption>
  </figure>
));

stories.add('Heading', () => (
  <div>
    <h1>Heading level 1</h1>
    <h2>Heading level 2</h2>
    <h3>Heading level 3</h3>
    <h4>Heading level 4</h4>
    <h5>Heading level 5</h5>
    <h6>Heading level 6</h6>
  </div>
));

stories.add('Horizontal rule', () => (
  <div>
    <p>
      §1: The first rule of Fight Club is: You do not talk about Fight Club.
    </p>

    <hr />

    <p>§2: The second rule of Fight Club is: Always bring cupcakes.</p>
  </div>
));

stories.add('Ordered list', () => (
  <ol>
    <li>Mix flour, baking powder, sugar, and salt.</li>
    <li>In another bowl, mix eggs, milk, and oil.</li>
    <li>Stir both mixtures together.</li>
    <li>Fill muffin tray 3/4 full.</li>
    <li>Bake for 20 minutes.</li>
  </ol>
));

stories.add('Paragraph', () => (
  <div>
    <p>
      Geckos are a group of usually small, usually nocturnal lizards. They are
      found on every continent except Australia.
    </p>

    <p>
      Some species live in houses where they hunt insects attracted by
      artificial light.
    </p>
  </div>
));

stories.add('Preformatted text', () => (
  <pre>
    {`^__^
(oo)\\_______
(__)\\       )\\/\\
    ||----w |
    ||     ||`}
  </pre>
));

stories.add('Table', () => (
  <table>
    <caption>Council budget (in £) 2018</caption>
    <thead>
      <tr>
        <th>Items</th>
        <th scope="col">Expenditure</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Donuts</th>
        <td>3,000</td>
      </tr>
      <tr>
        <th scope="row">Stationary</th>
        <td>18,000</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th scope="row">Totals</th>
        <td>21,000</td>
      </tr>
    </tfoot>
  </table>
));

stories.add('Unordered list', () => (
  <ul>
    <li>Milk</li>
    <li>
      Cheese
      <ul>
        <li>Blue cheese</li>
        <li>Feta</li>
      </ul>
    </li>
  </ul>
));
