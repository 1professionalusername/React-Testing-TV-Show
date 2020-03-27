import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

//jest.mock('./api/fetchShow')


// import {
//     render,
//     getByText,
//     fireEvent,
//     waitForElement,
//     wait
// } from '@testing-library/react';
// import fetchShow from './api/fetchShow'



test('Render the heading', async () => {
    // Render the React app into jest DOM so we can test against it
    const wrapper = rtl.render(<App />)

    //     // // element is now our dom element that we can test against
    //     const element = await wrapper.getByText("Select a season")

    //     // //test will fail if element is not visible to our robot eyes
    //     expect(element).toBeInTheDocument();
})

// test('Render count input', async () => {
//     const wrapper = rtl.render(<App />)


// using a regular expression instead of a string allows our
//query to be much more flexible. For example, if the text becomes
// all uppercase, we don't want our text to break

//     const element = wrapper.getByPlaceholderText(/count/i);
//     expect(element).toHaveValue(1)


// })




