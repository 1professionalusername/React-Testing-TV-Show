import React from 'react'
// No default export, just exporting everything from this library
import * as rtl from '@testing-library/react'
// Not importing to a variable, since this just overrides jest global variables
import '@testing-library/jest-dom/extend-expect'
import App from './App'



test('Render the heading', async () => {
    // Render the React app into jest DOM so we can test against it
    const wrapper = rtl.render(<App />)

    // element is now our dom element that we can test against
    const element = wrapper.getByText('/stranger things/i')

    //test will fail if element is not visible to our robot eyes
    expect(element).toBeVisible();
})

test('Render count input', async () => {
    const wrapper = rtl.render(<App />)


    // using a refular expression instead of a string allows our
    //query to be much more flexible. For example, if the text becomes
    // all uppercase, we don't want our text to break

    const element = wrapper.getByPlaceholderText(/count/i);
    expect(element).toHaveValue(1)


})