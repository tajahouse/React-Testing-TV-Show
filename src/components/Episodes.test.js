
import React from "react";
import { render } from "@testing-library/react";
import Episodes from './Episodes';


test("Episode's content",()=>{
    const { getAllByTestId, rerender } = render(<Episodes episodes={[]} />);

 

})