import { useEffect, useState } from "react";

export default function FetchExample() {
    const [data, setData] = useState(null)

    useEffect(() => {
        getData()
    },[])

    useEffect(() => {
        console.log(data)
    }, [data])

    async function getData() {
        try {
            const res = await fetch('/api')
            const json = await res.json()
            setData(json)
        } catch(e) {
            console.error('You got an error! This is likely due to being on the development build.')
        }
    }

    return (
        <div>
            Look at the console
        </div>
    )
}