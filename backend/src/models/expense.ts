import { Schema, model } from 'mongoose';

const expenseSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Expense = model('Expense', expenseSchema);

export default Expense;