import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { setHeightAndWidth, zeroingData } from '../../store/reducers/reducer';
import { Button, TextField } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import '../../styles/wallpers-parametrs.scss';


const WallperParametrs = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const [sizex, toggleSizex] = useState(null);
    const [sizey, toggleSizey] = useState(null);
    return (
        <div className='count'>
            <div className='count__step'>
                <p>Шаг {data.type !== 1 ? '3' : '4'}</p>
            </div>

            <div className='container'>
                <div className='count__question'>
                    <p>Длинна стен(в метрах):</p>
                </div>

                <div className='count__answers'>
                    <form className='answers__form'>
                        <TextField id="standard-basic" onChange={(event) => toggleSizex(event.target.value)} />
                        <ClearIcon />
                        <TextField id="standard-basic" onChange={(event) => toggleSizey(event.target.value)} />
                    </form>
                </div>
            </div>

            <div className='count__buttons'>
                <div className='count__next'>
                    <Link to="/result">
                        <Button
                            onClick={() => dispatch(setHeightAndWidth(sizex, sizey))}
                            variant="outlined"
                            color="primary"
                            className="btn-next"
                        >
                            Далее
                        </Button>
                    </Link>
                </div>
                <div className='count__cancel'>
                    <Link to="/">
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
        </div>
    )
}

export default WallperParametrs;