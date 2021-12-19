import axios from "axios";

export const baseUrl = "https://buyit.p.rapidapi.com";

export const fetchApi = async (url) => {
    const {data} = await axios.get(url, {
        headers: {
            "x-rapidapi-host": "bayut.p.rapidapi.com",
            "x-rapidapi-key":
                "dd1bad2630mshb3c0a8749f7eb4bp1d33f8jsn354d58ac554d",
        }
    });

    return data;
};
