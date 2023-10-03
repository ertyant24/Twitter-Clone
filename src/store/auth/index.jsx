import { createSlice } from "@reduxjs/toolkit";
import Trump from '../../../public/trump.svg'

const initialState = {
    currentAcccounts: {
        id: 1,
        username: "ali456738",
        fullName: "ali",
        avatar: 'https://pbs.twimg.com/profile_images/1640153136558948352/rntgL77B_200x200.jpg'
    },
    accounts: [
        {
            id: 1,
            username: "ali456738",
            fullName: "ali",
            avatar: 'https://pbs.twimg.com/profile_images/1640153136558948352/rntgL77B_200x200.jpg'
        },
        {
            id: 2,
            username: "trump911",
            fullName: "trump",
            avatar: Trump,
        }
    ]
}

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        _addAccount: (state, action) => {
            state.accounts.push(action.payload);
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter((account) => account.id !== action.payload)
            if (state.currentAcccounts && action.payload === state.currentAcccounts.id) {
                this._setCurrentAccounts(false)
            }
        },
        _setCurrentAccounts: (state, action) => {
            state.currentAcccounts = action.payload
        }
    }
})

export const { _addAccount, _removeAccount, _setCurrentAccounts } = auth.actions

export default auth.reducer