const SET_TYPE = 'SET_TYPE';
const SET_FLOORS = 'SET_FLOORS';
const SET_MATERIALS = 'SET_MATERIALS';
const SET_HEIGH_AND_WIDTH = 'SET_HEIGH_AND_WIDTH';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const ZEROING_DATA = 'ZEROING_DATA';

const defaultState = {
    type: null,
    floors: 1,
    material: null,
    sizex: null,
    sizey: null,
    isFetching: true
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case SET_TYPE:
            return {
                ...state,
                type: action.payload
            }
        case SET_FLOORS:
            return {
                ...state,
                floors: action.payload
            }
        case SET_MATERIALS:
            return {
                ...state,
                material: action.payload
            }
        case SET_HEIGH_AND_WIDTH:
            return {
                ...state,
                sizex: action.payload.sizex,
                sizey: action.payload.sizey

            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case ZEROING_DATA:
            return defaultState
        default:
            return state
    }

}

export const setType = (type) => ({
    type: SET_TYPE,
    payload: type
})

export const setFloors = (count) => ({
    type: SET_FLOORS,
    payload: count,
})

export const setMaterials = (material) => ({
    type: SET_MATERIALS,
    payload: material,
})

export const setHeightAndWidth = (sizex, sizey) => ({
    type: SET_HEIGH_AND_WIDTH,
    payload: {
        sizex,
        sizey
    }
})

export const setIsFetching = (bool) => ({
    type: SET_IS_FETCHING,
    payload: bool
})

export const zeroingData = () => ({
    type: ZEROING_DATA
})
