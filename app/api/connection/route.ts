import { connectToDB } from '@/utils/database';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async () => {
    try {
        await connectToDB()
        return NextResponse.json({ message: 'connected' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'not connected' }, { status: 500 });
    }
};