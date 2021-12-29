import React from "react";
import { render, screen } from '@testing-library/react';
import {Provider} from "react-redux";
import App from "../App";
import store from "../store/configureStore";

test('renders Chmod Calculator form', () => {
    render(<Provider store={store}><App /></Provider>);
    const element = screen.getAllByText(/Chmod Calculator/i);
    expect(element[1]).toBeInTheDocument();
});
