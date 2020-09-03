import { Utility } from "../../utils/Utility";
import { ActionsTypes } from '../actions';

export const reducerPosts = (prevState: any = {}, action: any) => {
    let clonedState = Utility.clone(prevState);
    switch (action.type) {
        case ActionsTypes.FETCH_POSTS_LIST_SUCCESS:
            clonedState.list = action.payload;
            break;
        default:
            break;
    }
    return clonedState;
};