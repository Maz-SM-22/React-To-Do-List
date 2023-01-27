import { Types } from 'mongoose';
import { Task } from './TaskType';

export type User = {
    _id: Types.ObjectId,
    username: string,
    email: string,
    hash: string,
    tasks: Array<Task>
}
