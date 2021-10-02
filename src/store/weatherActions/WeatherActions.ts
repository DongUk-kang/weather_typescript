import {
    GET_WEATHER,
    SET_LOADING,
    SET_ALRET,
    SET_ERROR, WeatherError, WeatherData, WeatherAction
} from "../types";
import {ThunkAction} from "redux-thunk";
import axios from "axios";
import { RootState } from "../index"



export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction>  => {
    return async dispatch => {
        try {
            const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e02c4eedf2317fedaaff283371dfafe6`)
            console.log(data)

            // if (data.status.toString() !== '200') {
            //     const dataError: WeatherError = data
            //     throw new Error(dataError)
            // } else {
            //     dispatch({
            //         type: GET_WEATHER,
            //         payload: data
            //     })
            // }
        }

        catch (err) {
            // dispatch({
            //     type: SET_ERROR,
            //     payload: err.response.data.message
            // })
        }
    }
}
