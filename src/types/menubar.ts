import {MouseEventHandler} from "react";

export type MenubarPropsType = {
    model: Array<object>,
    onLogoClick: MouseEventHandler<HTMLButtonElement>,
    onGitHubClick: MouseEventHandler<HTMLButtonElement>
}
