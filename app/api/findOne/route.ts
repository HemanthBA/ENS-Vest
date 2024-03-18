import User from '@/models/user';
import { connectToDB } from '@/utils/database';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
    const searchparams = req.nextUrl.searchParams;
    const ensName = searchparams.get('ensName');
    console.log("i am going to print User");
    console.log({User});
    try {
        await connectToDB();
        // const user = await User.findOne({EnsName : ensName});
        if(true){
            return NextResponse.json({ message: 'match found', res : ensName, present: true}, { status: 200 });
        }
        else{

            return NextResponse.json({ message: 'match found', res : ensName, present: false }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({ message: 'not connected' }, { status: 500 });
    }
};