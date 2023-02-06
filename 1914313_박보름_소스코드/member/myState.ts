export type Member = {
    name: string,
    image: string,
    comments: string,
}

export type MemberState = {
    member: Member
}

export type Study = {
    name: string,
    comments: string,
    duration: number,
    deadline: number
}