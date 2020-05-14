import {useState, useEffect} from 'react';

export default monthlyPayment => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const URI = `https://www.arnoldclark.com/used-cars/search.json?payment_type=monthly&min_price=${monthlyPayment}`;

  useEffect(() => {
    (async function() {
      try {
        setLoading(true);
        const response = await fetch(URI);
        const data = await response.json();
        setSearchResults(
          data.searchResults.filter(car => car.imageCount > 0).slice(0, 6),
        );
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [URI, monthlyPayment]);

  return [searchResults, loading];
};
