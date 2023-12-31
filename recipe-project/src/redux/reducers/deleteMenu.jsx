const initialState = {
    data: null,
    errorMessage:'',
    isLoading: false,
    isError:false
}

const deleteMenuReducer = (state=initialState,action) => {
    if(action.type === 'MENU_DELETE_PENDING'){
        return{
            ...state,
            isLoading: true,
        }
    } else if(action.type === 'MENU_DELETE_SUCCESS'){
        return{
            ...state,
            data: action.payload,
            isLoading:false,
            errorMessage:'',
            isError:false
        }
    } else if(action.type === 'MENU_DELETE_FAILED'){
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

export default deleteMenuReducer