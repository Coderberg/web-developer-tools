import {render, screen} from "@testing-library/react";
import React from "react";
import CurrentEpochTime from "../../../../components/EpochConverter/CurrentEpochTime/CurrentEpochTime";

const copyToClipboard = jest.fn();

const setup = () => {
    render(<CurrentEpochTime currentUnixTime="111222333"
                             copyToClipboardButtonState="default"
                             copyToClipboard={copyToClipboard}/>)
}

it('shows the current unix time', () => {
    setup();
    expect(screen.getByText('111222333')).toBeVisible()
});

it('shows the "Copy" button', () => {
    setup();
    expect(screen.getByText('Copy')).toBeVisible()
});
