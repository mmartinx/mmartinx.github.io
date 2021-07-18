import "./__mocks__/matchMedia.mock.js";

import React from "react";

import {render} from "@testing-library/react";
import App from "./App";
import {act} from "react-dom/test-utils";

it("renders S.P.E.C.I.A.L. in h3", () => {
    act(() => {
        const {getByText} = render(<App/>);
        const actual = getByText("S.P.E.C.I.A.L.")
        expect(actual).toBeInTheDocument()
        expect(actual.tagName).toBe("H3")
    })
})

it("renders Fallout 4 Character Planner in Navbar.Brand", () => {
    act(() => {
        const {getByText} = render(<App/>);
        const actual = getByText("Fallout 4 Character Planner")
        expect(actual).toBeInTheDocument()
        expect(actual.tagName).toBe("SPAN")
        expect(actual.parentElement).toBeInTheDocument()
        expect(actual.parentElement?.className).toContain("navbar-brand")
    })
})
