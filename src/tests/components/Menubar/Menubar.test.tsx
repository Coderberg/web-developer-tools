import React from "react";
import {render, screen} from "@testing-library/react";
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

render(<Router><Menubar model={items}
                        onLogoClick={() => {}}
                        onGitHubClick={() => {}}/></Router>);

test('shows the menu items', () => {
    items.forEach((item) => {
        expect(screen.getByText(item.label)).toBeInTheDocument()
    });
});
