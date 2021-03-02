import React, { createContext, useReducer } from 'react';
import AppReduser from "./AppReduser";

const initialState = {
    users: []
};

export const GlobalContext = createContext(initialState);

const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReduser, initialState)
    
    //Action
    const removeUser = id => {
        dispatch({
            type: "REMOVE_USER",
            payload: id
        })
    }
    //Add user
    const addUser = user => {
        dispatch({
            type: "ADD_USER",
            payload: user
        })
    }
    //Add edit
    const editUser = user => {
        dispatch({
            type: "EDIT_USER",
            payload: user
        })
    }

    return ( 
        <GlobalContext.Provider value={
                {
                    users: state.users,
                    removeUser,
                    addUser,
                    editUser
                }}>
            {props.children} 
        </GlobalContext.Provider>
     );
}
export default GlobalProvider;