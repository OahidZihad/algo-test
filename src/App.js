import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setSelectedPost } from './redux2/actions';
import Posts from './components/Posts';

const App = () => {
  const dispatch = useDispatch();
  const selectedPost = useSelector((state) => state.selectedPost);

  const newPostcolumns = useMemo(
    () => [
      { Header: 'User ID', accessor: 'userId' },
      { Header: 'ID', accessor: 'id' },
      { Header: 'Title', accessor: 'title' },
      { Header: 'Body', accessor: 'body' },
      {
        Header: 'Comments',
        accessor: 'comments',
        Cell: ({ row }) => {
          return (
              <button onClick={() => window.location.replace(`http://localhost:3000/${row?.original?.id}`)}>View Comments</button>
          )
        },
      },
    ],
    []
  )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch(setSelectedPost(postsResponse.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      {selectedPost ? <Posts columns={newPostcolumns} items={selectedPost} /> : null}
    </>
  );
};

export default App;
