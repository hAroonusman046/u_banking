import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import React from 'react'

const Home = () => {
  const loggedIn ={firstName:'Syed ', lastName:'Usman', email:'haroonusman046@gmail.com'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access  and manage your accounts and transactions efficiently"
          />

        </header>
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[]}></RightSidebar>
    </section>
  )
}

export default Home