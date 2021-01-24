import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/choose.scss';

const Choose = () => {


    return (
        <div className='choose'>
            <div className='choose__step'>
                <p>Шаг 1</p>
            </div>

            <div className='container'>
                <div className='choose__question'>
                    <p>Что будем строить?</p>
                </div>

                <div className='choose__answers'>
                    <ul>
                        <li>Жилой дом</li>
                        <li>Гараж</li>
                    </ul>
                </div>
            </div>

            <div className='choose__buttons'>
                <div className='choose__next'>
                    <Link to="/count">
                        <Button
                            variant="outlined"
                            color="primary"
                            className="btn-next"
                        >
                            Далее
                            </Button>
                    </Link>
                </div>
                <div className='choose__cancel'>
                    <Link to="/">
                        <Button
                            variant="outlined"
                            color="secondary"
                            className="btn-cancel"
                        >
                            Отмена
                            </Button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Choose;