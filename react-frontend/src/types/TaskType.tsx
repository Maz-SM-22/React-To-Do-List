import { Types } from 'mongoose';

export type Task = {
    id: Types.ObjectId,
    title: string,
    description: string,
    completed: boolean,
    dueDate: any
}
