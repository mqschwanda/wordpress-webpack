import React from 'react';
import Masonry from 'react-masonry-component';

import { Card, CardContent, CardTitle, Image, ContentBox } from 'components';
import { pushPath } from 'modules';
import { decodeHtml } from 'ui/helpers';

export default ({ ...props }) => (
  <div style={{ width: '100%' }}>
    <Card onClick={() => { pushPath(`/posts/${props.slug}`); }}>
      {props._embedded && props._embedded['wp:featuredmedia'] && props._embedded['wp:featuredmedia'].length > 0 ? (
        <Image src={props._embedded['wp:featuredmedia'][0].source_url} />
      ) : ''}
      <CardContent>
        {props.title ? (
          <CardTitle dangerouslySetInnerHTML={{ __html: decodeHtml(props.title.rendered) }} />
        ) : ''}
        {props.content ? (
          <ContentBox dangerouslySetInnerHTML={{ __html: decodeHtml(props.content.rendered) }} />
        ) : ''}
      </CardContent>
    </Card>
  </div>
);
