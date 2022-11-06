import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./components/Country";
import Loading from "./components/Loading";
import { CountryType } from "./types";

function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  const getCountries = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.com/v2/all"
      );
      setCountries(data);
    } catch {
      console.log("veri cekilemedi.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCountries();
  }, []);
  console.log(countries);

  return (
    <div>
      {loading ? (
        <Loading loading={"Yükleniyor..."} />
      ) : (
        countries.map((country, index) => {
          return <Country country={country} key={index} />;
        })
      )}
    </div>
  );
}

export default App;
