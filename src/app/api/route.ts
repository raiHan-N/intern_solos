import { NextResponse } from 'next/server';
import datas from '../../source.json';

export async function GET(req:Request) {
 return NextResponse.json(datas.data);
}