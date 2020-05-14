import {useState, useEffect} from 'react';
import Consts from '../constants/Consts';

export default monthlyPayment => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const URI = Consts.API_URL + monthlyPayment;

  useEffect(() => {
    (async function() {
      try {
        setLoading(true);
        const response = await fetch(URI);
        const {searchResults} = await response.json();
        // Get top 6 car deal those have images
        setResults(
          searchResults
            .filter(car => {
              return car.imageCount > 0 && car.salesInfo.pricing.monthlyPayment;
            })
            .slice(0, 6),
        );
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [URI, monthlyPayment]);

  return [results, loading];
};
