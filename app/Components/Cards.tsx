'use client';
import React, {useState, useEffect} from 'react'
import Card from './Card';
import Navbar from './Navbar';

interface User {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
}

const Cards = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [cartItems, setCartItems] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

    return (
      <div className='flex flex-col bg-zinc-200 pb-6'>
        <Navbar 
          cartItems={cartItems}
        />
        <div className='flex flex-wrap justify-center gap-6 mt-6'>
            {users.map((user) => (
                <Card
                    key={user.id}
                    title={user.title}
                    description={user.category}
                    price={user.price}
                    image={user.image}
                    setCartItems={setCartItems} 
                    cartItems={cartItems}
                />
                )
            )}
        </div>
      </div>
        
    )
}
export default Cards
