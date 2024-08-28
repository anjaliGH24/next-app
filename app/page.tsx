import React from 'react';
import Cards from './Components/Cards';

export default async function Home() {
  
  return (
    <main className='flex flex-col bg-zinc-200 pb-6'>
      <Cards/>
    </main>
  );
}