import React, {FC, FormEvent, useState} from 'react';

interface SearchProps {
    title: string;
}


const Search: FC<SearchProps> = ({title}) => {

    const [city, setCity] = useState("")

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (city.trim() === "") {
            alert("City is required")
        }

    }

  return (

      <div className={"hero is-right has-text-centered"}>
          <div className={"hero-body"}>
              <div className={"container"}>
                  <h1 className={"title"}>{title}</h1>
                  <form className={"py-5"} onSubmit={submitHandler}>
                      <input
                        type={"text"}
                        className={"input has-text-centered mb-2"}
                        placeholder={"Enter City Name"}
                        style={{ maxWidth: 300 }}
                        value={city}
                        onChange={e => setCity(e.target.value)}
                      />
                      <button
                          className={"button is-primary is-fullwidth"}
                          style={{ maxWidth: 300, margin: "0 auto" }}
                      >
                          Search
                      </button>
                  </form>
              </div>
          </div>
      </div>


  );
};

export default Search;
