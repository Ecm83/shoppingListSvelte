export const fetchData = async (value) => {
    const url = `https://sephora.p.rapidapi.com/us/products/v2/search?q=q%3D${value}&pageSize=60&currentPage=1`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPY_KEY,
        "X-RapidAPI-Host": "sephora.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.products);
      return result.products;
    } catch (error) {
      console.error(error);
    }
  };