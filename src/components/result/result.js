import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setIsFetching, zeroingData } from '../../store/reducers/reducer';
import Loader from '../loader'
import axios from 'axios';
import '../../styles/result.scss';


const Result = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const [result, setResult] = useState();
    useEffect(() => {
        async function getResult() {
            try {
                const { type, floors, material, sizex, sizey } = data;
                dispatch(setIsFetching(true))
                const info = await axios.get(`https://data.techart.ru/lab/json/?building=${type}&height=${floors}&material=${material}&sizex=${sizex}&sizey=${sizey}`);
                const result = await info.data;
                console.log(result);
                setResult({
                    result: result.result,
                    message: result.message
                });
            } catch (e) {

            } finally {
                dispatch(setIsFetching(false))
            }

        }
        getResult();
    }, [])

    if(data.isFetching){
        return <Loader/>
    }

    return (
        <div className='result'>
            <div className='result__step'>
                <p>Результат расчета</p>
            </div>

            <div className='container'>
                {result.result !== 'error' &&
                    <>
                        <div className='result__success'>
                            <p>Успешно</p>
                        </div>
                        <div className='result__success-answer'>
                            <p>{result.message}</p>
                        </div>
                    </>
                }
                {result.result === 'error' &&
                    <>
                        <div className='result__error'>
                            <p>Ошибка</p>
                        </div>
                        <div className='result__error-answer'>
                            <p>{result.message}</p>
                        </div>
                    </>
                }

            </div>

            <div className='result__buttons'>
                <div className='result__cancel'>
                    <Link to="/">
                        <Button
                            onClick={() => dispatch(zeroingData())}
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