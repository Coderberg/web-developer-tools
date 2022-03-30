import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import CopyToClipboard from "../../../components/common/CopyToClipboard";

const copyToClipboard = jest.fn();

const setup = () => {
    render(<CopyToClipboard copyToClipboard={copyToClipboard} copyToClipboardButtonState='default'/>)
    const button = screen.getByText('Copy')
    return {button}
}

it('should simulate button click', () => {
    const {button} = setup()
    fireEvent.click(button);
    expect(copyToClipboard).toBeCalledTimes(1)
});
