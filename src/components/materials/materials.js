import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import '../../styles/materials.scss';


const Materials = () => {
    return (
        <div className='materials'>
            <div className='materials__step'>
                <p>Шаг 3</p>
            </div>

            <div className='container'>
                <div className='materials__question'>
                    <p>Материал стен</p>
                </div>

                <div className='materials__answers'>
                    <ul>
                        <li>Кирпич</li>
                        <li>Шлакоблок</li>
                        <li>Деревянный бру</li>
                    </ul>
                </div>
            </div>

            <div className='materials__buttons'>
                <div className='materials__next'>
                    <Link to="/wallpers">
                        <Button
                            variant="outlined"
                            color="primary"
                            className="btn-next"
                        >
                            Далее
                            </Button>
                    </Link>
                </div>
                <div className='materials__cancel'>
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

export default Materials;