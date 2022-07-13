import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import Link from 'next/link'
import Head from 'next/head'
let global;

export default function Home() {
 return (
        <>
            Index page 
            <Link href="/admin" >Admin</Link>
        </>
		)
		
}
		
// export const prismaClient = global?.prism ?? new PrismaClient();
