import { ISSUES } from "../constants/env";
import { Instance } from "../factories/axiosFactory";
import { IssueListDTO } from "../interface/types";

class RepositoryService {
    public async getIssues(page: number, perPage: number): Promise<Array<IssueListDTO>> {
        const requestQuery = 
            `state=open` +
            `&sort=comments` +
            `&page=${page}` +
            `&per_page=${perPage}`
        const { data, status } = await Instance.get(ISSUES + '?' + requestQuery);
        return data;
    }
}

const repositoryService = new RepositoryService();
export default repositoryService;