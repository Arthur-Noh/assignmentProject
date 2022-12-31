import { DETAIL_ISSUE } from './../constants/env';
import { ISSUES } from "../constants/env";
import { Instance } from "../factories/axiosFactory";
import { IssueDTO } from "../interface/types";

class RepositoryService {
    public async getIssueList(page: number, perPage: number): Promise<Array<IssueDTO>> {
        const requestQuery = 
            `state=open` +
            `&sort=comments` +
            `&page=${page}` +
            `&per_page=${perPage}`
        const { data, status } = await Instance.get(ISSUES + '?' + requestQuery);
        return data;
    }

    public async getDetailIssue(commentId: number): Promise<IssueDTO> {
        const { data, status } = await Instance.get(DETAIL_ISSUE(commentId));
        return data;
    }
}

const repositoryService = new RepositoryService();
export default repositoryService;