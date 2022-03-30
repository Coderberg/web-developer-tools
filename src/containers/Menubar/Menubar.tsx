import React from "react";
import Menu from '../../components/Menubar/Menubar';

const Menubar: React.FC = () => {

    const items: object[] = [
        {
            label: 'Chmod Calculator',
            icon: 'pi pi-angle-right',
            url: '#/chmod_calculator'
        },
        {
            label: 'Crontab Generator',
            icon: 'pi pi-calendar',
            url: '#/crontab_generator'
        },
        {
            label: 'Unix Timestamp Converter',
            icon: 'pi pi-clock',
            url: '#/unix_timestamp_converter'
        },
        {
            label: 'Password Generator',
            icon: 'pi pi-shield',
            url: '#/password_generator'
        }
    ];

    const onLogoClick = () => {
        window.location.hash = '/'
    };
    const onGitHubClick = () => {
        window.open('https://github.com/Coderberg/web-developer-tools')
    };

    return <Menu model={items} onLogoClick={onLogoClick}
                 onGitHubClick={onGitHubClick}/>
}

export default Menubar;
