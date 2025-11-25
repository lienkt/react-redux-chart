import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IUser, ILabel } from '../types'

export interface VariablesSliceState {
  variableSelected: IUser[],
  label: ILabel | null,
}

const initialState: VariablesSliceState = {
  variableSelected: [],
  label: null
}

const variableSlice = createSlice({
  name: 'variables',
  initialState,
  reducers: {
    setVariable: (state, action: PayloadAction<IUser>) => {
      state.variableSelected.push(action.payload)
    },
    unCheckVariable: (state, action: PayloadAction<string>) => {
      state.variableSelected = state.variableSelected.filter(variable => variable._id !== action.payload)
    },
    updateLabel: (state) => {
      const label = state.variableSelected.reduce((acc: any, curr) => {
        if(acc.hasOwnProperty(curr.role)) {
          acc[curr.role] += 1;
        } else {
          acc[curr.role] = 1;          
        }
        return acc;
      }, {} as ILabel)

      state.label = label;
    }
  },
})

export const { setVariable, unCheckVariable, updateLabel } = variableSlice.actions;

export const variableReducer = variableSlice.reducer;