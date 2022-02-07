import { AppBar, Container, Toolbar, Typography, Button } from '@mui/material';
import { Rocket as RocketIcon } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = () => {
  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <NavLink to="/">
                <RocketIcon fontSize="large" color="disabled" />
              </NavLink>
            </Typography>
            <Button component={NavLink} to="/todos">
              Todo
            </Button>
            <Button component={NavLink} to="/giphy-search">
              Giphy Search
            </Button>
            <Button component={NavLink} to="/about">
              About
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Offset />
    </>
  );
};
