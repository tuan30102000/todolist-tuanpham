import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
        const data = await userApi.register(payload)

        localStorage.setItem('access__token', data.jwt)
        localStorage.setItem('user', JSON.stringify(data.user))


        return data.user
    }
)
export const login = createAsyncThunk(
    'user/login',
    async (payload) => {
        const data = await userApi.login(payload)

        localStorage.setItem('access__token', data.jwt)
        localStorage.setItem('user', JSON.stringify(data.user))


        return data.user
    }
)

const userSlice = createSlice(
    {
        name: 'user',
        initialState: {
            current: {},
            setting: {}
        },
        reducers: {},
        extraReducers: {
            [register.fulfilled]: (state, action) => {
                state.current = action.payload
            },
            [login.fulfilled]: (state, action) => {
                state.current = action.payload
            }

        }
    }
)

const { reducer } = userSlice
export default reducer