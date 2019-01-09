import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const repsonse = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: repsonse.data });
};

export const fetchUser = id => async dispatch => {
  const repsonse = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: repsonse.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = getState().posts.map(post => post.userId);
  const uniqueUserIds = new Set();
  userIds.forEach(id => uniqueUserIds.add(id));
};

// Using memoize
// export const fetchUser = id => async dispatch => _fetchUser(id, dispatch);
// const _fetchUser = memoize(async (id, dispatch) => {
//   const repsonse = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: repsonse.data });
// });
