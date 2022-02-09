import { useEffect, useState } from 'react';
import { query } from './graphql/query/posts';
import { MicroblogPayload, Post } from './graphql/microblog';
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import Moment from 'react-moment';

export const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const CONTENTFUL_SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
    const API_KEY = process.env.REACT_APP_CONTENTFUL_SPACE_DELIVERY_API_KEY;

    fetch(
      `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({ query }),
      }
    )
      .then((response) => response.json())
      .then(({ data }: MicroblogPayload) => {
        setPosts(data.microblogCollection.items);
      });
  }, []);

  return (
    <>
      <Typography variant="h5" gutterBottom component="div">
        Blog
      </Typography>
      {posts.map((item: Post) => {
        return (
          <Card key={item.title} sx={{ m: '10px' }}>
            {item.image ? (
              <CardMedia
                component="img"
                height="200"
                image={item?.image?.url}
                alt={item?.image?.title}
              />
            ) : (
              <Typography variant="body1" gutterBottom component="div">
                Nothing to show here :(
              </Typography>
            )}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {item.text}
              </Typography>
              <Typography variant="caption" color="text.disabled">
                <Moment format="DD/MM/YYYY">{item.publishedAt}</Moment>
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};
