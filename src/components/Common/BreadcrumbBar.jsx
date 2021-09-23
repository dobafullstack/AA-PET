import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Breadcrumb.css';

export function BreadcrumbBar({ breadcrumbs }) {

    return (
        <div className="breadcrumb-wrapper">
            <div className="breadcrumb">
                {breadcrumbs.map(({ breadcrumb, match }, index) => (
                    <span key={index}>
                        <Link to={match.url} className="me-1">
                            {breadcrumb}{' '}
                            {index === breadcrumbs.length - 1 ? (
                                ''
                            ) : (
                                <i class="fas fa-caret-right"></i>
                            )}
                        </Link>
                    </span>
                ))}
            </div>
            <div className="group-share">
                <i class="fas fa-share-alt"></i>
                <span>Share</span>
            </div>
        </div>
    );
}
