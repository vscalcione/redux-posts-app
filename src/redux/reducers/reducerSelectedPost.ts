import { ActionsTypes } from "../actions";
import { Utility } from "../../utils/Utility";

export const reducerSelectedPost = (prevState: any = {}, action: any) => {
    let clonedState = Utility.clone(prevState);
    switch (action.type) {
        case ActionsTypes.ACTION_SELECT_POST:
            clonedState.id = action.payload.id;
            break;
        default:
            break;
    }
    return clonedState;
};