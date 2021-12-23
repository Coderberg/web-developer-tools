import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import CurrentEpochTime from "../../../containers/EpochConverter/CurrentEpochTime";
import store from "../../../store/configureStore";

test('is able to see current unix epoch time', () => {
    render(<Provider store={store}><CurrentEpochTime/></Provider>);
    expect(screen.getByText('The current Unix epoch time is')).toBeInTheDocument();
    expect(screen.getByText((Math.floor(Date.now() / 1000)).toString())).toBeInTheDocument();
});

test('is able to copy current unix epoch time to clipboard', async() => {
    render(<Provider store={store}><CurrentEpochTime/></Provider>);

    Object.defineProperty(navigator, "clipboard", {
        value: {
            writeText: () => {},
        },
    });

    const btn = screen.getByText("Copy");
    fireEvent.click(btn);
    expect(screen.getByText('Copied')).toBeInTheDocument();

    await waitFor(() => {
        expect(screen.getByText('Copy')).toBeInTheDocument();
    }, {timeout: 6000});
}, 7000);
