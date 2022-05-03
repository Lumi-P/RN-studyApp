import type {Action} from "redux";
import {Member} from "./myState";

type ChangeInfoAction = Action<"changeinfo"> & {
    member: Member
};

export type ChangeInfoActions = ChangeInfoAction;

export const ChangeInfoAction = (member: Member): ChangeInfoActions => {
    return {
        type: "changeinfo",
        member
    };
}

type DeleteStudyAction = Action<"delete">
type MakeStudyAction = Action<"make"> & {
    name: string,
    comments: string,
    duration: number,
    deadline: number
};

export type MakeStudyActions = MakeStudyAction | DeleteStudyAction;

export const makeStudyAction = (name: string, comments: string, duration: number, deadline: number): MakeStudyActions => {
    return {
        type: "make",
        name: name,
        comments: comments,
        duration: duration,
        deadline: deadline
    };
}
export const deleteStudyAction = (): DeleteStudyAction => {
    return {type: "delete"};
}