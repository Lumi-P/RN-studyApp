import {createStore} from "redux";
import {rootMembers} from "./rootMembers";

export const makeMember = () => {
    return createStore(rootMembers);
}