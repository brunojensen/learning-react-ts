import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Link,
  Box,
} from '@mui/material';
import { GitHub, Rocket as RocketIcon } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = () => {
  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

  return (
    <>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography noWrap component="div" sx={{ mr: 2 }}>
              <NavLink to="/">
                <RocketIcon fontSize="large" color="disabled" />
              </NavLink>
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Button component={NavLink} to="/board">
                Board
              </Button>
              <Button component={NavLink} to="/todos">
                Todo
              </Button>
              <Button component={NavLink} to="/giphy-search">
                Giphy Search
              </Button>
              <Button component={NavLink} to="/about">
                About
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              <Typography noWrap component="div">
                <Link
                  target="_blank"
                  href="https://github.com/brunojensen/learning-react-ts"
                  rel="noreferrer"
                >
                  <GitHub />
                </Link>
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Offset />
    </>
  );
};
