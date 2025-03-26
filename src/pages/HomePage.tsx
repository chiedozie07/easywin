import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <main className="flex flex-col min-h-screen px-4">
        <h1 className="text-lg md:text-3xl font-bold text-gray-200 mt-3 text-center drop-shadow-lg">
          Welcome to <span className="text-yellow-300">Chiedozie's</span>
          <br /> EasyWin Lucky World Cup Game App!
        </h1>
      </main>
  )
}

export default HomePage