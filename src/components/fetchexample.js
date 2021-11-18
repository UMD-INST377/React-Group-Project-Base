import { useEffect, useState } from 'react';

async function getData() {
  try {
    const res = await fetch('/api');
    const json = await res.json();
    setData(json);
  } catch (e) {
    console.log('You got an error! This is likely due to being on the development build.');
  }
}

export default function FetchExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
        <div>
            Look at the console
        </div>
  );
}