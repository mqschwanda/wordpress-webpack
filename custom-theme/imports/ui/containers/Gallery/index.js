import React from 'react';
import Masonry from 'react-masonry-component';

import { Card, CardContent, CardTitle, Image, MasoinryBlock } from 'components';
import { pushPath, decodeHtml, get } from 'modules';


const getPostMedia = get(['_embedded', 'wp:featuredmedia']);

export default props => (
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
          {getPostMedia(post).length > 0 ? (
            <Image src={getPostMedia(post)[0].source_url} />
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
