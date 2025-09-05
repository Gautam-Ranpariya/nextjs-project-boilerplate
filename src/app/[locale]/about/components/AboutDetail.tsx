'use client'

// Next.js Imports
import Image from 'next/image'

const AboutDetail = () => {
  return (
    <>
      <div
        className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-gray-600"
        data-testid="modal-overlay"
      >
        <div className="w-1/2 rounded-lg bg-white p-8" data-testid="about-modal">
          <Image
            src={`https://picsum.photos/400/400?random=${Date.now()}`}
            alt="dynamic image"
            className="mb-4 h-40 w-40 rounded-full"
            width={400}
            height={400}
            data-testid="about-image"
          />
          <h1 className="mb-4 text-4xl font-bold" data-testid="about-title">
            About Me
          </h1>
          <p className="text-lg text-gray-600" data-testid="about-paragraph-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid cumque consectetur
            ratione. Blanditiis nulla eaque, delectus voluptate fugiat dolor consectetur nisi,
            adipisci, nesciunt facilis sequi cupiditate quisquam esse laborum aliquid.
          </p>
          <p className="text-lg text-gray-600" data-testid="about-paragraph-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id debitis sed eveniet facilis
            corporis alias tempora, beatae rerum labore soluta magnam officiis quam autem, delectus
            fuga quod a, modi distinctio ex consequuntur dolorum. Itaque laborum eius, voluptatibus
            at, minima quo fugit nemo, error voluptas rem commodi tempore? Maiores, qui at!
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutDetail
