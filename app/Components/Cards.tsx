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
  });

  const handleAddtoCart=(user:User) => {
    setCartItems((prevItems)=>[...prevItems, user]);
  };
  const handleRemove = (id:number) =>{
    console.log('remove',id);
    setCartItems((prevItems)=>prevItems.filter((item)=>item.id !== id))
  }

    return (
      <div className='bg-zinc-200 pb-6'>
            <Navbar 
              cartItems={cartItems}
              handleRemove={handleRemove}
            />
          <div className='flex flex-wrap justify-center gap-6 mt-6'>
              {users.map((user) => (
                  <Card
                    id={user.id}
                      key={user.id}
                      title={user.title}
                      description={user.category}
                      price={user.price}
                      image={user.image}
                      setCartItems={setCartItems} 
                      cartItems={cartItems}
                      handleAddtoCart={()=>handleAddtoCart(user)}
                      handleRemove={handleRemove}
                  />
                  )
              )}
          </div>
      </div>
        
    )
}
export default Cards
