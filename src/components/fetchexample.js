import { useEffect, useState } from 'react';

async function getData(setData) {
  try {
    const res = await fetch('/api/dining');
    const json = await res.json();
    return json;
  } catch (e) {
    console.log('You got an error! This is likely due to being on the development build.');
  }
}

// function diningHalls(obj) {
//   console.log(obj);
//   return data.map((item, i) => `<span>${item.hall_name}</span>`);
// }

export default function FetchExample() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function setDataState() {
      const info = await getData();
      console.log(info);
      setData(info.data);
    }
    setDataState();
  }, []);

  console.log('data outside hook', data.map((m) => <span>${m.hall_name}</span>));

  const inject = data ? data.map((item, i) => <li key={i}>{item.hall_name}</li>) : null;

  return (
        <div>
            Look at the console <br/>
            {data?.length > 0 ? <ul>{inject}</ul> : null}
        </div>
  );
}