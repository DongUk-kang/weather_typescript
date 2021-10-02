// import React, { FC } from 'react';
//
// const App: FC = (props) => {
//
//   return (
//
//       <div>
//           <h1>abc</h1>
//       </div>
//
//
//   );
// };
//
// export default App;
import React, { FC, useEffect } from 'react';
import Search from "./components/Search";
import { useDispatch } from "react-redux"
// import { getWeather } from "./weatherActions/WeatherActions";
import axios from "axios";


const App: FC = () => {

    // const dispatch = useDispatch()

    // const getData = async () => {
    //     const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=sss&appid=e02c4eedf2317fedaaff283371dfafe6`)
    //     console.log(data)
    // }

    useEffect(() => {
        // getData()
    }, [])

  return (
      <div className={"has-text-centered"}>
        <Search title={"Enter City Name"} />
      </div>
  );


};

export default App;
