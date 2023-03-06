import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    techCrunch: null,
    loading: false,
    error: false,
};

export const TechCrunchContext = createContext(INITIAL_STATE);

export const TechCrunchReducer = (state, action) => {
    switch (action.type) {
        case "LOADING_START":
            return {
                techCrunch: null,
                loading: true,
                error: false,
            };

        case "LOADING_SUCCESS":
            return {
                techCrunch: action.payload,
                loading: false,
                error: false,
            };

        case "LOADING_FAILURE":
            return {
                techCrunch: null,
                loading: false,
                error: true,
            };

        default:
            return state;
    }
};

export const TechCrunchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TechCrunchReducer, INITIAL_STATE);
    
    return (
        <TechCrunchContext.Provider
            value={{
                techCrunch: state.techCrunch,
                loading: state.loading,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </TechCrunchContext.Provider>
    );
};
