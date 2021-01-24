import { Button } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { setType, zeroingData } from '../../store/reducers/reducer';
import '../../styles/choose.scss';

const Choose = () => {
    const [type, toggleType] = useState(null);
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);

    const chooseAndSetType = (num) => {
        toggleType(num);
        dispatch(setType(num))
    }

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

                        <li
                            onClick={() => chooseAndSetType(1)}
                        >
                            <Link to='/count'>
                                <p>Жилой дом</p>
                            </Link>
                        </li>
                        <li
                            onClick={() => chooseAndSetType(2)}
                        >
                            <Link to='/materials'>
                                Гараж
                            </Link>
                        </li>


                    </ul>
                </div>
            </div>

            <div className='choose__buttons'>
                <div className='choose__next'>
                    <Link to={type !== 2 ? "/count" : "/materials"}>
                        <Button
                            onClick={() => dispatch(setType(type))}
                            variant="outlined"
                            color="primary"
                            className="btn-next"
                        >
                            Далее
                            </Button>
                    </Link>
                </div>
                <div className='choose__cancel'>
                    <Link to={"/"}>
                        <Button
                            onClick={() => dispatch(zeroingData())}
                            variant="outlined"
                            color="secondary"
                            className="btn-cancel"
                        >
                            Отмена
                            </Button>
                    </Link>

                </div>
            </div>
        </div >
    )
}

export default Choose;