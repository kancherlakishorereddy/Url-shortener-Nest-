import { Model } from 'mongoose';
import { CreateMyrlDto } from './dto/myrl.dto';
import { MyrlInterface } from './interfaces/myrl.interface';
export declare class MyrlService {
    private myrlModel;
    constructor(myrlModel: Model<MyrlInterface>);
    findOne(urlCode: string): Promise<string>;
    modify(data: CreateMyrlDto): Promise<string>;
}
