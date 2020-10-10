import React from 'react';

import './ContentCard.css';


export const ContentCard = ({title, content, date}) => {

console.log(date)
    return (
        <div className="content_card">
            <div className="card__face__colored-side"></div>
            <div className="content_card__left m-3 d-flex justify-content-center align-items-center">
                <div className="content_card__left__header">
                    {date.toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'})}
                    <p className="content_card__left__sub m-0">{date.toTimeString().substr(0,8)}</p>
                </div>
            </div>

            <div className="content_card__right text-left align-self-center">
                <div className="u-height-full">
                    <p className="m-0 border-bottom d-flex justify-content-between">
                        <span className="content_card__right__header">{title}</span>
                        <a href="/">
                            <span className="pr-3 content_card__left__sub"><img className="edit-logo" src="edit.jpeg" alt="not found"/></span>
                        </a>
                    </p>
                    <p className="m-0">{content}</p>
                </div>
            </div>
        </div>
    )
}
