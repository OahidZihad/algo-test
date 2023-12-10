import PostsTable from './PostsTable';
import PostDetails from './PostDetails';
import { Button, Grid } from '@mui/material';

const Posts = ({columns, items}) => {
  return (
    <Grid container>
      <Grid item xs={7}>
        <PostsTable
          columns={columns}
          items={items}
        />
      </Grid>
      <Grid item xs={5}>
        <PostDetails />
      </Grid>
    </Grid>
  );
};

export default Posts;
