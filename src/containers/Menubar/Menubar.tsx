import React from "react";
import Menu from '../../components/Menubar/Menubar';

const Menubar: React.FC = () => {

    const items: object[] = [
        {
            label: 'Chmod Calculator',
            icon: 'pi pi-angle-right',
            url: '#/chmod_calculator'
        }
    ];

    const onLogoClick = () => {
        window.location.hash = '/'
    };
    const onGitHubClick = () => {
        window.open('https://github.com/Coderberg')
    };

    return <Menu model={items} onLogoClick={onLogoClick}
                 onGitHubClick={onGitHubClick}/>
}

export default Menubar;
