import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          <h2 className="text-lg font-bold">About Us</h2>
          <p className="mt-2">A brief description of your website or company.</p>
        </div>
        <div className="text-white">
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p className="mt-2">Phone: 123-456-7890</p>
          <p>Location: 123 Main St, City, Country</p>
        </div>
        <div className="text-white">
          <p className="text-sm">© {new Date().getFullYear()} Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer;