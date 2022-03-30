import React, {MouseEventHandler} from "react";
import {Button} from "primereact/button";

type CopyToClipboardType = {
    copyToClipboard: MouseEventHandler<HTMLButtonElement>;
    copyToClipboardButtonState: 'default' | 'pressed';
}

const CopyToClipboard: React.FC<CopyToClipboardType> =
    ({copyToClipboard, copyToClipboardButtonState}) => {

        const text = copyToClipboardButtonState === 'pressed' ? 'Copied' : 'Copy';
        const icon = copyToClipboardButtonState === 'pressed' ? 'pi pi-check' : 'pi pi-copy';

        return <Button label={text}
                       icon={icon}
                       type="button"
                       onClick={copyToClipboard}
                       className="p-button-sm w-100"/>
    }

export default CopyToClipboard;
