import useSWR from "swr";

export function useDawaPlaces(query) {
    const {data: places} = useSWR("https://api.dataforsyningen.dk/adresser/autocomplete?q=" + query);
    return places;
}

export function useFindDawaPlace(id) {
    const {data: places} = useSWR(id ? "https://api.dataforsyningen.dk/adresser?id=" + id : null);
    return places;
}
