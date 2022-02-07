import { Gif } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { IGif } from '@giphy/js-types';
import {
  Stack,
  ImageList,
  ImageListItem,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY ?? '';
const gf = new GiphyFetch(GIPHY_API_KEY);

export const GiphySearch = () => {
  const [userInput, setUserInput] = useState('');
  let [gifs, setGifs] = useState<IGif[]>([]);

  const changeUserInput = (e: any) => {
    setUserInput(e.currentTarget.value);
  };

  const search = async (e: any) => {
    e.preventDefault();
    if (!userInput) return;
    gifs = (
      await gf.search(userInput, { sort: 'relevant', limit: 9, type: 'gifs' })
    ).data;
    setUserInput('');
    setGifs(gifs);
  };

  return (
    <>
      <Typography variant="h5" gutterBottom component="div">
        Giphy Search
      </Typography>
      <Stack component="form" onSubmit={search} noValidate autoComplete="off">
        <TextField
          value={userInput}
          onChange={changeUserInput}
          required
          id="outlined-required"
          label="Search giphy"
        />
      </Stack>
      <ImageList cols={3} rowHeight={164}>
        {gifs.map((item) => (
          <ImageListItem key={item.id}>
            <Gif gif={item} width={300} />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};
