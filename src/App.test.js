import React from "react";
import { render } from "@testing-library/react";
import App from "./App"

test("Render of Episodes",()=>{
    const { getAllByTestId, rerender } = render(<App episodes={[]} />);

    const episodesUrl = ["https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"]

    

 

})