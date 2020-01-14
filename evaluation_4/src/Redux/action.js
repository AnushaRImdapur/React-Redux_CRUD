export const LOG_IN='LOG_IN'
export const LOG_OUT='LOG_OUT'
export const COMMENT_DATA='COMMENT_DATA';
export const SHOW_DATA='SHOW_DATA';
export const CREATE_DATA='CREATE_DATA';
export const loginUser =(payload)=>({
    type:LOG_IN,
    payload
})



export const showData=payload=>{
    return{
        type:SHOW_DATA,
        payload
    }
}
export const createData=payload=>{
    return{
        type:CREATE_DATA,
        payload
    }
}
export const commentData=payload=>{
    console.log("action",payload)
    return{
        type:COMMENT_DATA,
        payload
    }
}