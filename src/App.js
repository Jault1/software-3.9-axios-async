import { useState, useEffect } from "react";
import TableDaily from "./components/TableDaily";
import "./App.css";
import { getWeatherData } from "./api/weatherapi";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScaleLoader from "react-spinners/ScaleLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#5985B2",
};

function App() {

  let [state, setState] = useState("AL");
  const [weatherdata, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false); // Page or api loading?

  function selectChangeHandler(e) {
    setState(e.target.value);
  }

 const getData = async () => {
    try {
      setLoading(true);
      const response = await getWeatherData(state);
      setWeatherData(response.features);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="App">
      <Header />
      <h1 className="pb-5">Get my alerts.</h1>

      {/* <input
        type="text"
        className="me-2"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Enter your state name"
      />
 */}


<h3>Enter your state name and click the button</h3>
      <select className="mb-5 me-3" onChange={(event) => selectChangeHandler(event)}> 
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
        <option value="AS">American Samoa</option>
        <option value="GU">Guam</option>
        <option value="MP">Northern Mariana Islands</option>
        <option value="PR">Puerto Rico</option>
        <option value="UM">United States Minor Outlying Islands</option>
        <option value="VI">Virgin Islands</option>
        <option value="AA">Armed Forces Americas</option>
        <option value="AP">Armed Forces Pacific</option>
        <option value="AE">Armed Forces Others</option>
      </select>

      <button type="button" className="mb-5" onClick={() => getData()}>
        Search
      </button>

      {loading ? (
        <div className="loader-container">
          <ScaleLoader
            css={override}
            size={300}
            color= {"#5985B2"}
            loading= {loading}
            />
        </div>
    ) : (
        <>
          {weatherdata !== null ? (           
            <TableDaily list={weatherdata} st={state} />
          ) : null}
        </>
      )}
      <Footer />

    </div>
  );
}

export default App;
