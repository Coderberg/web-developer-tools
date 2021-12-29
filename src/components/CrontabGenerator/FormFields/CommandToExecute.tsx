import React from "react";
import {InputText} from "primereact/inputtext";
import {Accordion, AccordionTab} from 'primereact/accordion';
import {CommandToExecutePropsInterface} from "../../../types/crontabGenerator";

const CommandToExecute: React.FC<CommandToExecutePropsInterface> =
    ({commandToExecuteValue, commandHasError, onCommandToExecuteChange}) =>

        <div className="card p-pt-1 p-pl-2 p-pb-5 border-top">
            <h4>Command To Execute</h4>
            <InputText value={commandToExecuteValue}
                       aria-label="Command To Execute"
                       onChange={onCommandToExecuteChange}
                       className={`w-100${commandHasError ? ` p-invalid` : ''}`}
            />

            <Accordion className="p-pt-4">
                <AccordionTab header="Command Examples:">
                    <p>Execute PHP script:</p>
                    <p><code className="bg-wisteria">/usr/bin/php
                        /var/www/app/cron.php</code></p>
                    <p>Execute Artisan command:</p>
                    <p><code className="bg-wisteria">/usr/bin/php
                        /var/www/laravel/artisan schedule:run</code></p>
                    <p>Access URL:</p>
                    <p><code className="bg-wisteria">/usr/bin/wget
                        --spider &quot;http://site.com/cron.php&quot;</code>
                    </p>
                </AccordionTab>
            </Accordion>

        </div>

export default CommandToExecute;
