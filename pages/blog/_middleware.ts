import { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(req: NextRequest, ev: NextFetchEvent){
    return NextResponse.redirect('http://localhost:3000/')
}