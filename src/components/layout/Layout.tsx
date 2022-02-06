import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Nav } from '../nav/Nav';

export const Layout = () => {
  return (
    <>
      <Nav />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </>
  );
};
