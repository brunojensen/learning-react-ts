import { MicroblogPayload } from '../schema/Schema';
import { query } from './query/query';

const CONTENTFUL_SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const API_KEY = process.env.REACT_APP_CONTENTFUL_SPACE_DELIVERY_API_KEY;

export const fetchPosts = async () => {
  const response: any = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({ query }),
    }
  );
  const { data }: MicroblogPayload = await response.json();
  return data.microblogCollection.items;
};
