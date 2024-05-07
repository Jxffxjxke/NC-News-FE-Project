import { Skeleton, Stack } from '@chakra-ui/react';
import React from 'react'

const ArticleSkeleton = () => {
  return (
    <Stack>
      <Skeleton height="200px" p='10px'/>
      <Skeleton height="40px" />
      <Skeleton height="40px" />
    </Stack>
  );
}

export default ArticleSkeleton;