import React from 'react';
import { Link } from "react-router-dom";
import { Button, TextField } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import '../../styles/wallpers-parametrs.scss';


const WallperParametrs = () => {
    return (
        <div className='count'>
            <div className='count__step'>
                <p>Шаг 4</p>
            </div>

            <div className='container'>
                <div className='count__question'>
                    <p>Длинна стен(в метрах):</p>
                </div>

                <div className='count__answers'>
                    <form className='answers__form'>
                        <TextField id="standard-basic" />
                        <ClearIcon/>
                        <TextField id="standard-basic" />
                    </form>
                </div>
            </div>

            <div className='count__buttons'>
                <div className='count__next'>
                    <Link to="/result">
                        <Button
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