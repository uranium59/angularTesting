import {Injectable} from '@angular/core';

@Injectable()
export class LoginCheckService {
    constructor() {
    }

    StorageNameOfApiToken = 'GISAdminService';

    ApiServerPrefix = 'https://localhost:64002/';

    get isLogin(): boolean {
        return !!localStorage.getItem(this.StorageNameOfApiToken);
    }
}
