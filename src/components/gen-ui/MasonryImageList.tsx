import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { FC } from 'react';
import IProject from 'src/types/IProject';

interface IProps{
  projects : IProject[];
}

const MasonryImageList : FC<IProps>= ({projects}) => {
  return (
    <Box sx={{ width: 500 }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {projects.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default MasonryImageList;