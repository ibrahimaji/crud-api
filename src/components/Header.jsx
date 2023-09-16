"use client"
import Lottie from "lottie-react"
import chickyAnimation from "../styles/Chicky.json"

export const Header = () => {

  return (
    <div className=" flex items-center justify-center lg:mx-48">
        <Lottie animationData={chickyAnimation} />
    </div>
  )
}
