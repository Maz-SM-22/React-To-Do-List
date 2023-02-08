import { Types } from 'mongoose';

export type Task = {
    id: Types.ObjectId | undefined,
    title: string | undefined,
    description: string | undefined,
    completed: boolean | undefined,
    dueDate: any | undefined
}
