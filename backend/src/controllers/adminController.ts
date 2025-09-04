import { Request, Response } from 'express';
import User from '../models/user';
import Payment from '../models/payment';
import Content from '../models/content';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

export const getUserMetrics = async (req: Request, res: Response) => {
    try {
        const payments = await Payment.find();
        const totalPayments = payments.length;
        const totalAmount = payments.reduce((acc, payment) => acc + payment.value, 0);
        
        res.status(200).json({ totalPayments, totalAmount });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching metrics', error });
    }
};

export const manageContent = async (req: Request, res: Response) => {
    const { action, contentId, contentData } = req.body;

    try {
        if (action === 'create') {
            const newContent = new Content(contentData);
            await newContent.save();
            return res.status(201).json(newContent);
        } else if (action === 'update') {
            const updatedContent = await Content.findByIdAndUpdate(contentId, contentData, { new: true });
            return res.status(200).json(updatedContent);
        } else if (action === 'delete') {
            await Content.findByIdAndDelete(contentId);
            return res.status(204).send();
        } else {
            return res.status(400).json({ message: 'Invalid action' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error managing content', error });
    }
};