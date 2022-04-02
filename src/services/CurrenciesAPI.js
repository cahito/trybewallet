const CURRENCIES_BASE_API = 'https://economia.awesomeapi.com.br/json/all';

const getCurrentRatios = async () => {
  const response = await fetch(CURRENCIES_BASE_API);
  const data = await response.json();

  return response.ok ? Promise.resolve(data) : Promise.reject(data);
};

export default getCurrentRatios;
