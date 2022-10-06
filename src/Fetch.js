const Fetch = async (url) => {
  try {
    const response = await fetch(url);
    const responseBody = await response.json();

    if (!response.ok) {
      throw new Error("Some Error Occured");
    }

    //Mapping data when everything is Good
    const transformData = responseBody.map((data) => {
      return {
        id: data.cca3 + data.ccn3,
        name: data.name.common,
        capital: data.capital,
        population: data.population,
        region: data.region,
        subRegion: data.subregion,
        tld: data.tld,
        language: data.languages,
        flag: data.flags.svg,
        currency: data.currencies,
        borders: data.borders,
        cca3: data.cca3,
      };
    });
    return transformData;
  } catch (e) {
    console.log(e.message);
  }
};
export default Fetch;
