import React from "react";
import { render, waitFor, fireEvent, getByText
 } from "@testing-library/react";
import App from "./App"
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import {episodeFixture} from "./components/Episodes.test";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";

// let container;
// beforeEach(()=>{
//     container=document.createElement("div");
//     document.body.appendChild(container);
// })

jest.mock("./api/fetchShow")

test("Render of Episodes", async ()=>{
// act(() =>{
//     ReactDOM.render(<App />);
    mockFetchShow.mockResolvedValueOnce({data: episodeFixture});

     const {queryAllByTestId, getByText } = render(<App />);
     await waitFor(()=>{
         getByText(/dropdown/i);
  });   
     const button = getByText(/dropdown/i);
     useEvent.click(button);
     const press = getByText(/Season 3 Suzie/i);
     userEvent.click(press);
     expect(queryAllByTestId(/episodes/i)).toHaveLength(1);
});




    // fire Event.click(dropdown)

    // await waitFor(()=> {
    //     expect(queryAllByTestId(episodeFixture).toHaveLength(2))
    
    // })

