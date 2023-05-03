import React from 'react'

export default function Footer() {
    return (
        <footer aria-label="Site Footer" className="bg-white border-top border-gray-300" style={{ marginTop: "330px", marginBottom: "50px", height: "115px"}}>
        <div
          className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
            <hr style={{ marginTop: "-25px"}} className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span style={{ marginTop: "-0.5px"}} className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; 2023 <a href="https://flowbite.com" target="_blank" className="hover:underline"> Realta Hotels</a>.
            </span>
        </div>
      </footer>     
        )
    }
