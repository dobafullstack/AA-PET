import React, { ReactElement } from "react";
import { ContextMenuTrigger } from "react-contextmenu";

interface Props {
    className?: string;
    children: React.ReactNode;
    id?: string;
}

export default function Td({ className, children, id }: Props): ReactElement {
    return (
        <td className={className}>
            {" "}
            <ContextMenuTrigger id='same_unique_identifier' attributes={{id}}>
                {children}
            </ContextMenuTrigger>
        </td>
    );
}
