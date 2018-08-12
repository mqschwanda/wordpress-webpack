import React from 'react';
import Masonry from 'react-masonry-component';

import { Card, CardContent, CardTitle, Image, ContentBox } from 'components';
import { pushPath, decodeHtml, get } from 'modules';

const getPostMedia = get(['_embedded', 'wp:featuredmedia']);

export default props => (
  <div style={{ width: '100%' }}>
    <Card onClick={() => { pushPath(`/posts/${props.slug}`); }}>
      {getPostMedia(props).length > 0 ? (
        <Image src={getPostMedia(props)[0].source_url} />
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
