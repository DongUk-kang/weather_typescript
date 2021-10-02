import React, { FC } from 'react';

interface WeatherProps {

}


const Weather: FC<WeatherProps> = () => {
  return (
      <section>
          <div>
              <h1 title={"title has-text-centered"} style={{marginBottom: 50}}>
                  {/*{data.name} - {data.sys.contry}*/}

              </h1>
          </div>
      </section>
  );
};

export default Weather;
