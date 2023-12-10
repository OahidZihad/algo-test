import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CommentsTable from './CommentsTable';
import { setComments } from '../redux2/actions';
import axios from 'axios';
import { Box, Typography } from '@mui/material';

const PostDetails = () => {
  const dispatch = useDispatch()
  const [id, setId] = useState()
  const comments = useSelector((state) => state.comments);

const currentUrl = window.location.href;
const match = currentUrl.match(/\/(\d+)$/);
useEffect(()=>{
  if (match) {
    const id = match[1];
    console.log('ID:', id);
    setId(id)
  } else {
    console.log('No ID found in the URL');
  }
},[match])

  const commentsColumns = useMemo(
    () => [
      { Header: 'Post ID', accessor: 'postId' },
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Body', accessor: 'body' },
    ],
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        dispatch(setComments(commentsResponse.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch, id]);

  return (
    <Box>
      {id ? 
        <>
          <Typography fontSize='28px'>Comments for Post {id}</Typography>
          <CommentsTable
            columns={commentsColumns}
            items={comments}
          />
        </> 
        : 
        <Typography fontSize='28px'>Please select first...</Typography>}
    </Box>
  );
};

export default PostDetails;
