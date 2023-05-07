import { Connection } from 'mongoose';
export declare const UserProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<import("mongoose").Document<any, {}>, {}>;
    inject: string[];
}[];
