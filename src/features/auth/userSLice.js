import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import StorageKeys from '../../constants/storageKey';

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
        const data = await userApi.register(payload)

        localStorage.setItem(StorageKeys.TOKEN, data.jwt)
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))


        return data.user
    }
)
export const login = createAsyncThunk(
    'user/login',
    async (payload) => {
        const data = await userApi.login(payload)

        localStorage.setItem(StorageKeys.TOKEN, data.jwt)
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))


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
        reducers: {
            logout(state, action) {
                localStorage.removeItem(StorageKeys.USER)
                localStorage.removeItem(StorageKeys.TOKEN)

                state.current ={}
                return state
            }
        },
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

const { reducer, actions } = userSlice
export const { logout } = actions
export default reducer