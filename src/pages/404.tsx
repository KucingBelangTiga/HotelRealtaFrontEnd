import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();
  const [count, setCount] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count === 0) {
      router.push('/');
    }
  }, [count]);

  return (
    <div>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-600 mt-8">
            404
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">
            Page Not Found
          </p>
          <p className="md:text-lg xl:text-xl text-gray-500 mt-4">
            Whoops. You will be redirected to the Dashboard page in {count}{' '}
            seconds.
          </p>
        </div>
      </div>
    </div>
  );
}
