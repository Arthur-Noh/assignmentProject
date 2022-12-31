// TODO: 정의하지 못한 DTO 필요할 때마다 추가 작성

export interface UserDTO {
    login: string;
}

export type IssueListDTO = {
    number: number;
    title: string;
    user: UserDTO;
    created_at: string;
    comments: number;
}