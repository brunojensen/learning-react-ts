import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Moment from 'react-moment';
import { Post } from './schema/Schema';

export const PostCard = (props: any) => {
  const post: Post = props?.post;
  return (
    <Card key={post.title} sx={{ mb: '10px' }}>
      {post.image ? (
        <CardMedia
          component="img"
          height="200"
          image={post?.image?.url}
          alt={post?.image?.title}
        />
      ) : (
        <Typography variant="body1" gutterBottom component="div">
          Nothing to show here :(
        </Typography>
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {post.text}
        </Typography>
        <Typography variant="caption" color="text.disabled">
          <Moment format="DD/MM/YYYY">{post.publishedAt}</Moment>
        </Typography>
      </CardContent>
    </Card>
  );
};
