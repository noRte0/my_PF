"use client"
import React from 'react'
import { ProfileCardContainer } from '../components/profile/ProfileCardContent'
import { ProfileImage } from '../components/profile/ProfileCardImage'
import { ProfileCardInfo } from '../components/profile/ProfileCardInfo'

const Home = () => {
  return (
    <div className="flex justify-end min-h-dvh items-center mr-36">
    <ProfileCardContainer>
      <ProfileImage
        src="https://your-image-source.com/logo.png"
        alt="Your Site Logo"
        width={550}
        height={350}
      />
      <ProfileCardInfo />
    </ProfileCardContainer>
    </div>
  )
}

export default Home