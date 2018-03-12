import { InMemoryDbService } from 'angular-in-memory-web-api';
import { USER_MOCK, REPORT_MOCK } from '../constants';


export class MockData implements InMemoryDbService {

    createDb() {
        let users: any[] = USER_MOCK;
        let reports: any[] = REPORT_MOCK;
        return { users, reports };
    }
}
