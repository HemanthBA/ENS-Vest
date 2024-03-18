import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface accountState {
    publicAddress: string;
}

const initialState: accountState = {
    publicAddress: ''
}

export const Account = createSlice({
    name: 'account',
    initialState,
    reducers: {
        updateAccountAddress: (state, action: PayloadAction<string>) => {
            state.publicAddress = action.payload
        }
    }
})

export const {updateAccountAddress} = Account.actions;

export default Account.reducer;