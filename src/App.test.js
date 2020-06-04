import React from "react";
import { render, waitFor, fireEvent
 } from "@testing-library/react";
import App from "./App"
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import {episodeFixture} from "./components/Episodes.test";


jest.mock("./api/fetchShow")

test("Render of Episodes", async ()=>{

   mockFetchShow.mockResolvedValueOnce({data: episodeFixture});

    const {getByTestId, queryAllByTestId } = render(<App />);



    // fire Event.click(dropdown)

    // await waitFor(()=> {
    //     expect(queryAllByTestId(episodeFixture).toHaveLength(2))
    
    // })

})