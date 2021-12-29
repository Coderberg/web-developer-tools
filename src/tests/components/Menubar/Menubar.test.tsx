import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {HashRouter as Router} from 'react-router-dom';
import Menubar from '../../../components/Menubar/Menubar';

const items = [
    {
        label: 'First link',
    },
    {
        label: 'Second link',
    },
    {
        label: 'Third link',
    }
];

const onGitHubClick = jest.fn();

const setup = () => render(<Router>
    <Menubar model={items}
             onLogoClick={() => {}}
             onGitHubClick={onGitHubClick}/>
</Router>)

it('shows the menu items', () => {
    setup();
    items.forEach((item) => {
        expect(screen.getByText(item.label)).toBeInTheDocument()
    });
});

it('should simulate button click', () => {
    setup();
    const button = screen.getByTestId('GitHub');
    fireEvent.click(button);
    expect(onGitHubClick).toBeCalledTimes(1);
});
