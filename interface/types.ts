// TODO: 정의하지 못한 DTO 필요할 때마다 추가 작성

export type UserDTO = {
    avatar_url: string,
    login: string,
}

export type IssueDTO = {
    number: number,
    title: string,
    user: UserDTO,
    created_at: string,
    comments: number,
    body: string,
}