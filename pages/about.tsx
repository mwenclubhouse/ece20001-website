import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import ResponsiveDrawer from "../components/layout";

export default function About() {
  return (
      <ResponsiveDrawer
          title={"About"}
      >
        <Typography>About Page</Typography>
      </ResponsiveDrawer>
  );
}
