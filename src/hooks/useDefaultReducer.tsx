import { useReducer } from 'react'

const reducerAction = 'SET_MULTIPLE_DATA'
const reducer = (state: any, action: any) => {
  if (action.type === reducerAction) {
    return { ...state, ...action.payload }
  }
  return state
}
const action = (data: any) => {
  return { type: reducerAction, payload: data }
}
const useDefaultReducer = (initialState: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const multipleAction = (data: any) => {
    dispatch(action(data))
  }
  return { state, multipleAction }
}
export default useDefaultReducer
