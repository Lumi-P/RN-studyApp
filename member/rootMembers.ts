import type {MemberState, Study} from "./myState";
import type {ChangeInfoActions, MakeStudyActions} from "./actions";

const initialState: MemberState = {
    member: {
        name: "스터디원",
        comments: "오늘도 파이팅",
        image: "https://source.unsplash.com/random/800x800"
    }
};

const initialStudy: Study = {
    name: "",
    comments: "",
    duration: 1,
    deadline: 21
};

export const rootMembers = (state: MemberState = initialState, action: ChangeInfoActions) => {
    switch(action.type){
        case "changeinfo":
            return {...state,
                changed: true,
                member: action.member
            };
    }
    return state;
};

export const rootStudy = (state: Study = initialStudy, action: MakeStudyActions) => {
    switch(action.type){
        case "make":
            return {...state,
                changed: true,
                name: action.name,
                comments: action.comments,
                duration: action.duration,
                deadline: action.duration
            };
        case "delete":
            return {
                state
            }
    }
    return state;
};