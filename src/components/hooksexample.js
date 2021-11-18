import { useState, useEffect } from 'react'

export default function HooksExample() {

    // Whenever a state changes, the app re-renders.
    // Below, we make a state 'testState' and give it an initial value of 1.
    // If we wanted to change it to 10, we must call setTestState(10)
    // Writing testState = 10 will NOT work
    const [testState, setTestState] = useState(1)
    const [otherState, setOtherState] = useState(1)

    // Everything inside this useEffect will be run on first render, and on every update
    // (componentDidMount + componentDidUpdate)
    useEffect(() => {
        console.log('Something Changed!')
    })

    // This useEffect will only be run if testState changes
    useEffect(() => {
        console.log('testState changed!')
    }, [testState])

    // This useEffect will only be run if otherState changes
    useEffect(() => {
        console.log('otherState changed!')
    }, [otherState])

    // This useEffect will only be run on the components first render
    // (componentDidMount + constructor)
    useEffect(() => {
        console.log('You will only see this message once!')
        // This returned function will be called when the component unmounts
        // (componentWillUnmount)
        return function() {
            console.log('Component Unmounted!')
        }
    }, [])

    function testStateClick() {
        setTestState(testState + 1)
    }

    function otherStateClick() {
        setOtherState(otherState * 2)
    }

    return (
        <div>
            <button onClick={testStateClick}>
                testState = {testState}
            </button>

            <button onClick={otherStateClick}>
                otherState = {otherState}
            </button>
        </div>
    )
}