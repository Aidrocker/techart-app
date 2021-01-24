import React from 'react';
import { Link } from "react-router-dom";
import { Button, TextField } from '@material-ui/core';
import '../../styles/count.scss'

const Count = () => {
    return (
        <div className='count'>
            <div className='count__step'>
                <p>Шаг 2</p>
            </div>

            <div className='container'>
                <div className='count__question'>
                    <p>Колличество этажей</p>
                </div>

                <div className='count__answers'>
                    <form className='answers__form'>
                        <TextField id="standard-basic"/>
                    </form>
                </div>
            </div>

            <div className='count__buttons'>
                <div className='count__next'>
                    <Link to="/materials">
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

export default Count;