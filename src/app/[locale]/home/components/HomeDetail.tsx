'use client'

import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const HomeDetail = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const fetchData = async () => {
    setIsLoading(true)
    setImageLoaded(false)

    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const data = res.data

      const randomPost = data[Math.floor(Math.random() * data.length)]
      setTitle(randomPost.title)
      setDescription(randomPost.body)

      setImage(`https://picsum.photos/400/300?random=${Date.now()}`)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 20000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-lg">
        {/* Header */}
        <div className="bg-purple-600 py-4 text-center">
          <h2 className="text-xl font-bold text-white md:text-2xl">Welcome To My Boilerplate</h2>
        </div>

        {/* Dynamic Image with skeleton */}
        <div className="relative h-60 w-full">
          {!imageLoaded && <Skeleton height={240} />}
          {image && (
            <Image
              src={image}
              alt="Random"
              width={400}
              height={300}
              className={`h-60 w-full object-cover transition-opacity duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoadingComplete={() => setImageLoaded(true)}
            />
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {isLoading ? (
            <>
              <Skeleton height={24} width="70%" className="mb-4" />
              <Skeleton count={3} />
            </>
          ) : (
            <>
              <h3 className="mt-2 text-lg font-semibold text-gray-800 capitalize">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
            </>
          )}

          {/* Refresh Button */}
          <button
            onClick={fetchData}
            className="mt-4 flex w-full items-center justify-center rounded-lg bg-blue-500 px-4 py-2 text-center font-semibold text-white hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="mr-2 animate-spin"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z" />
                </svg>
                Loading
              </>
            ) : (
              'Refresh'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeDetail
