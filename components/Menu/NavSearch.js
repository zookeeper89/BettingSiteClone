import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Autocomplete, Button, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import en from "locales/en";
import da from "locales/da";
import de from "locales/de";
import useSWR from "swr";
import { useRouter } from "next/router";
import { DateRangePicker, DateRangePickerValue } from "@mantine/dates";

export function NavbarSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { locale } = router;
  const t =
    locale === "da" ? da : locale === "de" ? de : locale === "en" ? en : "";

  const { data: autocomplete, error } = useSWR(
    query
      ? "https://api.dataforsyningen.dk/supplerendebynavne2/autocomplete?q=" +
          query +
          "&per_side=5"
      : null
  );
  const { data: autokommune, error2 } = useSWR(
    query
      ? "https://api.dataforsyningen.dk/kommuner/autocomplete?q=" +
          query +
          "&per_side=5"
      : null
  );

  const [value, setValue] = useState([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);

  const reformattedQuery = autocomplete?.map((item) => {
    return {
      value: item.supplerendebynavn.navn,
      group: "Steder",
      id: item.supplerendebynavn.dagi_id,
    };
  });
  const reformattedKommuner = autokommune?.map((item) => {
    return {
      value: item.kommune.navn,
      group: "Kommuner",
      id: item.kommune.dagi_id,
    };
  });

  return (
    <div className="flex justify-center border-green-600 rounded-lg border-2">
      <div className="w-2/6">
        <Autocomplete
          placeholder={t.navbar.search}
          className="w-full"
          classNames={{ icon: "p-2", input: "border-white rounded-lg focus:border-green-400 rounded-r-none" }}
          icon={<MagnifyingGlassIcon />}
          onChange={setQuery}
          data={
            [...(reformattedKommuner ?? []), ...(reformattedQuery ?? [])] ?? []
          }
        />
      </div>
      <div className="w-2/6">
        <DateRangePicker
          placeholder="Pick dates range"
          classNames={{ icon: "p-2", input: "border-white rounded-lg focus:border-green-400"}}
          value={value}
          onChange={setValue}
        />
      </div>
      <div className="w-1/6">
        <Select
          placeholder="Personer"
          classNames={{ icon: "p-2", input: "border-white rounded-lg focus:border-green-400" }}
          data={[
            { value: 1, label: "1 Person" },
            { value: 2, label: "2 Personer" },
            { value: 3, label: "3 Personer" },
            { value: 4, label: "4 Personer" },
            { value: 5, label: "5 Personer" },
            { value: 6, label: "6 Personer" },
            { value: 7, label: "7 Personer" },
            { value: 8, label: "8 Personer" },
            { value: 9, label: "9 Personer" },
            { value: 10, label: "10 Personer" },
            { value: 11, label: "11 Personer" },
            { value: 12, label: "12 Personer" },
            { value: 13, label: "13 Personer" },
            { value: 14, label: "14 Personer" },
            { value: 15, label: "15 Personer" },
            { value: 16, label: "15+ Personer" },
          ]}
        />
      </div>
      <div className="w-1/6">
        <Button className="w-full bg-green-600 hover:bg-green-500 rounded-none rounded-r-md">Søg</Button>
      </div>
    </div>
  );
}
