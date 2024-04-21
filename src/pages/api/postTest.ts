import type { NextApiRequest, NextApiResponse } from "next";

import {  PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method !== 'POST'){
        return res.status(405).json({message:"Methon not allowed."});
    }
    const userData = JSON.parse(req.body);
    const savedUser = await prisma.object.create({
        data: userData
    })
    res.json(savedUser);
}