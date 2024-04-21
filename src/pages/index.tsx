'use client'
import { PrismaClient } from "@prisma/client";
import React from "react";
import { useState } from "react";


type Object = {
  id: number,
  strTest: String,
  angle_X: String,
  angle_y: String,
}

const prisma = new PrismaClient();
export async function getServerSideProps(){
    // const Objs:Object[] = await prisma.object.findMany();
    const Objs:Object[] = await prisma.object.findMany();
    return {
      props:{
        initialObjs: Objs
      }
    }
}

async function saveObj(Obj:Object){
  const response = await fetch('/api/postTest', {
      method: 'POST',
      body: JSON.stringify(Obj)
  });
  if(!response.ok){
      throw new Error(response.statusText);
  }
  return await response.json();
}

export function handleClick(){
  const Objtest:Object = {id:2, strTest:"test", angle_X:"16.67", angle_y:"5.5"} 
  saveObj(Objtest);
}

export default function Home({
  initialObjs
}:{
  initialObjs:Object[]
}) {
  const [Objs, setObjs] = useState<Object[]>(initialObjs);
  return (
    <>
      <>{
        Objs.map((object)=>(
          <div key={object.id}>
              <p>{`${object.strTest}`}</p>
              <p>{`${object.angle_X}`}</p>
              <p>{`${object.angle_y}`}</p>
          </div>
        ))
      }</>
      <button onClick={handleClick}>add new data</button>
      {/* <StreamViewer /> */}
    </>
  );
}
