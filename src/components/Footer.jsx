
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-500 text-white p-8">
      <div className="container mx-auto justify-center items-center flex">
        <p>&copy; {new Date().getFullYear()} Movie Summer</p>
      </div>
    </footer>
  );
}

export default Footer;
