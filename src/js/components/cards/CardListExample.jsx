import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardActions } from 'react-md/lib/Cards';
import { IconButton } from 'react-md/lib/Buttons';

import { randomImage } from '../../utils';
import Markdown from '../../containers/Markdown';

const markdown = `
\`Cards\` can be placed in a flexbox list by using the class
\`.md-card-list\`. It is just a basic flex helper class that applies
the correct 8px margin from each component and the edge of the screen. It
is completely optional.

You can also force all the cards to be equal size if you apply
\`.md-card-list.equal-width\`.
`;

export default class CardListExample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cards = Array.apply(null, new Array(10)).map((_, i) => (
      <Card key={i} className="demo-list-card">
        <CardMedia
          aspectRatio={CardMedia.aspect.equal}
          overlay={<CardTitle title="Title" />}
        >
          <img
            src={randomImage({ width: 220, time: i })}
            alt="Some random image"
          />
        </CardMedia>
        <CardActions centered={true}>
          <IconButton>favorite</IconButton>
          <IconButton>bookmark</IconButton>
          <IconButton>reply</IconButton>
        </CardActions>
      </Card>
    ));

    return (
      <div>
        <Markdown markdown={markdown} />
        <div className="md-card-list">
          {cards}
        </div>
      </div>
    );
  }
}
