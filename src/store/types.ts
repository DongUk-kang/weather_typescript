export const GET_WEATHER = "GET_WEATHER";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_ALRET = "SET_ALRET"

export interface WeatherData {

}

export interface WeatherError {
    code: string,
    message: string
}

interface GetWeatherAction {
    type: typeof GET_WEATHER
    payload: WeatherData
}

interface SetLoadingAction {
    type: typeof SET_LOADING
}

interface SetErrorAction {
    type: typeof SET_ERROR
    payload: string
}

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction
export interface WeatherState {
    data: WeatherData | null
    loading: boolean
    error: string
}