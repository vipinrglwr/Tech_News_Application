// context creation
//provider
//consumer
//usecontext hook
import React from "react";
import { useContext, useReducer, useEffect } from 'react'
import reducers from './reducers';


const AppContext = React.createContext();

//create a provider function

const AppProvider = ({ children }) => {

    let API = "http://hn.algolia.com/api/v1/search?"


    const intialState = {
        isLoading: true,
        query: "CSS",
        nbPages: 0,
        page: 0,
        hits: [],
    }


    // const [first, setfirst] = useState(second)
    const [state, dispatch] = useReducer(reducers, intialState)

    //dispatch :dispatch trigger action in useReducter function


    const fetchApiData = async (url) => {

        dispatch({ type: "SET_LOADING" });
        //payload is used to share extra information
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                }
            });
        } catch (error) {
            console.log(error)
        }
    }


    //remove The post

    const removePost = (post_ID) => {
        dispatch({ type: "REMOVE_POST", payload: post_ID })
    }

    //call the api function
    const SearchPost = (searchQuery) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: searchQuery,
        })
    }

    //pagination

    const getNextPage = () => {
        dispatch({
            type: "NEXT_PAGE",
        })
    }


    const getPrevPage = () => {
        dispatch({
            type: "PREV_PAGE",
        })
    }


    //run only first time and it is used to fetch data
    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page])



    return (
        <AppContext.Provider value={{ ...state, removePost, SearchPost, getNextPage, getPrevPage }} >
            {children}
        </AppContext.Provider>
    );
};
//custom hook creation

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };