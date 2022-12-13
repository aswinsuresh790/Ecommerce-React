import { useContext } from "react";
import { createContext } from "react";
import { useReducer } from "react";
export const  StateContext=createContext()
export const StateProvide=({reducer,InitialState,children})=>(
        <StateContext.Provider value={useReducer(reducer,InitialState)}>{children}</StateContext.Provider>
)
export const useStateValue=()=>useContext(StateContext)
