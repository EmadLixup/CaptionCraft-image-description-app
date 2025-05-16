import React from 'react';

function TailwindTest() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-blue-500">Tailwind v4 & DaisyUI Test</h2>
          <p className="text-gray-700">
            This card should have a shadow, blue title, and a styled button if Tailwind v4 and DaisyUI are working.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Test Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TailwindTest;