const initialState = {
    categoryData: null,
    errorMessage:'',
    isLoading: false,
    isError:false
}

const categoryReducer = (state=initialState,action) => {
    if(action.type === 'CATEGORY_PENDING'){
        return{
            ...state,
            isLoading: true,
        }
    } else if(action.type === 'CATEGORY_SUCCESS'){
        return{
            ...state,
            categoryData: action.payload,
            isLoading:false,
            errorMessage:'',
            isError:false
        }
    } else if(action.type === 'CATEGORY_FAILED'){
        return{
            ...state,
            categoryData:null,
            errorMessage:action.payload,
            isLoading:false,
            isError:true
        }
    } else {
        return state
    }
}

export default categoryReducer