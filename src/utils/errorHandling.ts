import { NextResponse } from "next/server"



export const apiResponse = <T>({success, message, status= 200, data}: {success: boolean, message: string, status?: number, data?: T}) => {
    return NextResponse.json(
        {
            success,
            message,
            data
        },
        {status}
    )
}