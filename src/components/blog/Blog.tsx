import { useEffect, useState } from 'react';
import { query } from './graphql/query/posts';
import { Post } from './graphql/microblog';
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
  const CONTENTFUL_SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID ?? '';
  const API_KEY = process.env.REACT_APP_CONTENTFUL_SPACE_DELIVERY_API_KEY ?? '';

  useEffect(() => {
    window
      .fetch(
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
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        setPosts(data.microblogCollection.items);
      });
  }, []);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
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
              <span />
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
    </Container>
  );
};
