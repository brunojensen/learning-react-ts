import { memo, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { PostCard } from './PostCard';
import { fetchPosts } from './graphql/FetchPosts';
import { Post } from './schema/Schema';

export const Blog = memo(() => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then((response) => setPosts(response));
  }, []);

  return (
    <>
      <Typography variant="h5" gutterBottom component="div">
        Blog v2
      </Typography>
      {posts.map((item: Post) => {
        return <PostCard post={item} />;
      })}
    </>
  );
});
