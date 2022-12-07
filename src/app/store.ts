import {configureStore} from "@reduxjs/toolkit";
import toDoReducer from '../features/toDoSlice/toDoSlice'

const store = configureStore({
    reducer:{
        TODO:toDoReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store