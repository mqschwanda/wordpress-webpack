import React from 'react';
import Masonry from 'react-masonry-component';

import { Card, CardContent, CardTitle, Image, MasoinryBlock } from 'components';
import { pushPath } from 'modules';
import { decodeHtml } from 'ui/helpers';

export default ({ ...props }) => (
  <Masonry
    className="" // default ''
    elementType="div" // default 'div'
    options={{}} // default {}
    disableImagesLoaded={false} // default false
    updateOnEachImageLoad
  >
    {props.posts && props.posts.length > 0 ? props.posts.map(post => (
      <MasoinryBlock key={post.id}>
        <Card onClick={() => { pushPath(`/posts/${post.slug}`); }}>
          {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 ? (
            <Image src={post._embedded['wp:featuredmedia'][0].source_url} />
          ) : ''}
          <CardContent>
            {post.title ? (
              <CardTitle dangerouslySetInnerHTML={{ __html: decodeHtml(post.title.rendered) }} />
            ) : ''}
          </CardContent>
        </Card>
      </MasoinryBlock>
    )) : ''}
  </Masonry>
);
