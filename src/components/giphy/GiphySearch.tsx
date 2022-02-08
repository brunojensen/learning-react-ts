import { Gif } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { IGif } from '@giphy/js-types';
import { ImageList, ImageListItem, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY ?? '';
const gf = new GiphyFetch(GIPHY_API_KEY);

export const GiphySearch = () => {
  const [userInput, setUserInput] = useState('');
  let [gifs, setGifs] = useState<IGif[]>([]);

  const changeUserInput = (e: any) => {
    setUserInput(e.currentTarget.value);
  };

  useEffect(() => {
    gf.search(userInput, { sort: 'recent', limit: 9, type: 'gifs' }).then(
      ({ data }) => {
        setGifs(data);
      }
    );
  }, [userInput]);

  return (
    <>
      <Typography variant="h5" gutterBottom component="div">
        Giphy Search
      </Typography>
      <TextField
        value={userInput}
        onChange={changeUserInput}
        required
        id="outlined-required"
        label="Search giphy"
        helperText="Type to search"
        sx={{ width: '100%' }}
      />
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
