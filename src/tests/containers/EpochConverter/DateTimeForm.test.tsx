import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import {Provider} from "react-redux";
import DateTimeForm from "../../../containers/EpochConverter/DateTimeForm";
import store from "../../../store/configureStore";

test('Human date to Timestamp', () => {
    render(<Provider store={store}><DateTimeForm/></Provider>);
    const btn = screen.getByText("Human date to Timestamp");
    fireEvent.click(btn);
    expect(screen.getByText(/Unix Timestamp/i)).toBeInTheDocument();
});
