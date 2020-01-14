import {LOG_OUT,LOG_IN,SHOW_DATA,CREATE_DATA,COMMENT_DATA} from "./action";
import {data} from "../Data"
const initialState={
    isAuth: false,
    email: 'admin',
    password: 'admin',
    showData:data,
    createData:[],
    commentData:[]
}
 const rootReducer=(state=initialState,action)=>{
     
    switch(action.type){
        case LOG_IN:
                    if (action.payload.email === state.email && action.payload.password === state.password)
                        return { ...state, isAuth: true }
                    else
                        return { ...state }
        case LOG_OUT:
            return {
                ...state,
                isAuth: false
                }
        case SHOW_DATA:
            return{
                ...state,
                showData:[...state.showData,action.payload]
            }
        case CREATE_DATA:
            console.log("cc",action.payload,state.createData)
            return{
                ...state,
                createData:[...state.createData,action.payload]
            }
        case COMMENT_DATA:
            console.log("acr",action.payload)
            return{
                ...state,
                commentData:[...state.commentData,action.payload]
            }
        default :
        return state
    }
}
export default rootReducer