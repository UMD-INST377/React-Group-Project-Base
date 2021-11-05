
/*
* Here is an example component, the props (children, number, text) being used are
* destructured in this example but do not have to be. Note that javascript within
* the return statement is surrounded by {}.
*/

export default function Example({
    children,
    number,
    text
}) {
    const newNumber = number * number
    let newText

    if (text) {
        newText = text.toUpperCase()
    }

    return (
        <div>
            <p>This is your new number: {newNumber}</p>
            <p>This is your new text: {newText}</p>
            {children.toLowerCase()}
        </div>
    )
}