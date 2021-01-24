import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import { setMaterials, zeroingData } from '../../store/reducers/reducer';
import '../../styles/materials.scss';


const Materials = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const [material, toggleMaterial] = useState(null);
    const chooseAndSetType = (num) => {
        toggleMaterial(num);
        dispatch(setMaterials(num))
    }


    return (
        <div className='materials'>
            {console.log(data)}
            <div className='materials__step'>
                <p>Шаг {data.type !== 1 ? '2' : '3'}</p>
            </div>
            <div className='container'>
                <div className='materials__question'>
                    <p>Материал стен</p>
                </div>

                <div className='materials__answers'>
                    {data.type === 1 ? (
                        <ul>

                            <li
                                onClick={() => chooseAndSetType(1)}
                            >
                                <Link to="/wallpers">
                                    Кирпич
                                </Link>
                            </li>


                            <li
                                onClick={() => chooseAndSetType(2)}
                            >
                                <Link to="/wallpers">
                                    Шлакоблок
                                </Link>
                            </li>


                            <li
                                onClick={() => chooseAndSetType(3)}
                            >
                                <Link to="/wallpers">
                                    Деревянный бруc
                                    </Link>
                            </li>

                        </ul>
                    ) : (
                            <ul>

                                <li
                                    onClick={() => chooseAndSetType(2)}
                                >
                                    <Link to="/wallpers">
                                        Шлакоблок
                                    </Link>
                                </li>



                                <li
                                    onClick={() => chooseAndSetType(4)}
                                >
                                    <Link to="/wallpers">
                                        Металл
                                    </Link>

                                </li>


                                <li
                                    onClick={() => chooseAndSetType(5)}
                                >
                                    <Link to="/wallpers">
                                        Сендвич-панели
                                    </Link>
                                </li>
                            </ul>
                        )

                    }
                </div>
            </div>

            <div className='materials__buttons'>
                <div className='materials__next'>
                    <Link to="/wallpers">
                        <Button
                            onClick={() => dispatch(setMaterials(material))}
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

export default Materials;