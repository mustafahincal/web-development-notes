import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

const todosAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const initialState = todosAdapter.getInitialState();

export const todosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => `/todos`,
      transformResponse: (response) =>
        todosAdapter.setAll(initialState, response),
      providesTags: (result, error, arg) => [
        { type: 'Todo', id: 'LIST' },
        ...result?.ids?.map(({ id }) => ({ type: 'Todo', id })),
      ],
    }),
  }),
});

export const { useGetTodosQuery } = todosApiSlice;

export const selectTodosResult = todosApiSlice.endpoints.getTodos.select();

const selectTodosData = createSelector(
  selectTodosResult,
  (todosResult) => todosResult?.data
);

export const {
  selectAll: selectAllTodos,
  selectById: selectTodoById,
  selectIds: selectTodoIds,
} = todosAdapter.getSelectors(
  (state) => selectTodosData(state) ?? initialState
);
