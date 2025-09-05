'use client'

// React Imports
import Image from 'next/image'

const HomeDetail = () => {
  return (
    <>
      <div className="bg-opacity-50 fixed top-0 left-0 z-10 h-full w-full bg-black">
        <div className="mx-auto mt-20 w-1/2 rounded-md bg-white p-4">
          <h2 className="text-center text-2xl font-bold">Welcome to my Boilerplate</h2>
          <p className="mt-4 text-center">
            This is a Next.js boilerplate for scalable apps with Tailwind CSS, TypeScript, and
            localization.
          </p>
          <Image
            className="mx-auto mt-4"
            src={`https://picsum.photos/400/400?random=${Date.now()}`}
            alt="Next.js"
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  )
}

export default HomeDetail
