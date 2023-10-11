const initialState = {
    data: null,
    errorMessage:'',
    isLoading: false,
    isError:false
}

const searchMenuReducer = (state=initialState,action) => {
    if(action.type === 'MENU_SEARCH_PENDING'){
        return{
            ...state,
            isLoading: true,
        }
    } else if(action.type === 'MENU_SEARCH_SUCCESS'){
        return{
            ...state,
            data: action.payload,
            isLoading:false,
            errorMessage:'',
            isError:false
        }
    } else if(action.type === 'MENU_SEARCH_FAILED'){
        return{
            ...state,
            data:null,
            errorMessage:action.payload,
            isLoading:false,
            isError:true
        }
    } else {
        return state
    }
}

export default searchMenuReducer