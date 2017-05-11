import * as React from "react";

import { Themed } from "@react-mdc/theme";
import { Display2, Typography } from "@react-mdc/typography";

export default function PageTitle(props: { children?: React.ReactChild, [key: string]: any }) {
    const {
        children,
        ...p,
    } = props;
    return (
        <Typography.Meta>
            <Themed color="primary" {...p}>
                <Display2>
                    {children}
                </Display2>
            </Themed>
        </Typography.Meta>
    );
}
