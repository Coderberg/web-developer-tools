import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import {Provider} from "react-redux";
import UnixTimeForm from "../../../containers/EpochConverter/UnixTimeForm";
import store from "../../../store/configureStore";

test('Timestamp to Human date', () => {
    render(<Provider store={store}><UnixTimeForm/></Provider>);
    expect(screen.getByText('Timestamp to Human date')).toBeInTheDocument();
    expect(screen.getByDisplayValue((Math.floor(Date.now() / 1000)).toString())).toBeInTheDocument();
    const btn = screen.getByText("Timestamp to Human date");
    fireEvent.click(btn);
    expect(screen.getByText(/GMT/i)).toBeInTheDocument();
});
