import React from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

export function TopTitle({ breadcrumbs }: any) {
    return (
        <div className="title-top mb-3">
            <span>{breadcrumbs[breadcrumbs.length - 1].breadcrumb}</span>
        </div>
    );
}
