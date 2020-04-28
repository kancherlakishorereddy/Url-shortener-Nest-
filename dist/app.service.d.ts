import { MyrlService } from './myrl/myrl.service';
export declare class AppService {
    private readonly myrlService;
    constructor(myrlService: MyrlService);
    getIndex(): string;
    getUrl(urlCode: any): Promise<string>;
}
