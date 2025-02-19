import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import UserMain from '../Main/UserMain'

const UserLayout = () => {
  return (
    <>
    {/* Header*/}
    <Header/>
    {/* Content*/}
    <UserMain/>
    {/* Footer*/}
    <Footer/>
    </>
  )
}

export default UserLayout