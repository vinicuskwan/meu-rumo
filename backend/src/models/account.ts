import { Schema, model } from 'mongoose';

const accountSchema = new Schema({
    accountType: {
        type: String,
        required: true,
        enum: ['checking', 'savings', 'credit', 'investment'],
    },
    balance: {
        type: Number,
        required: true,
        default: 0,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,
});

const Account = model('Account', accountSchema);

export default Account;