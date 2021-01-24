import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import '../../styles/result.scss';


const Result = () => {
    return (
        <div className='result'>
            <div className='result__step'>
                <p>Результат расчета</p>
            </div>

            <div className='container'>
                <div className='result__question'>
                    <p>Успешно</p>
                </div>

                <div className='result__answers'>
                    <p>Цена строения: 224 тыс.пиастров  </p>
                </div>
            </div>

            <div className='result__buttons'>
                <div className='result__cancel'>
                    <Link to="/">
                        <Button
                            variant="outlined"
                            color="secondary"
                            className="btn-new-payment"
                        >
                            Новый расчет
                        </Button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Result;