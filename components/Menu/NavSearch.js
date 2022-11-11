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
import dayjs from "dayjs";
import { useEffect } from "react";
import Filter from "./Filter/Filter";
import { IoFilter } from "react-icons/io5";

export function NavbarSearch() {
  const [query, setQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const router = useRouter();
  const { locale } = router;
  const t =
    locale === "da" ? da : locale === "de" ? de : locale === "en" ? en : "";

  const today = new Date();
  const tomorrow = new Date(today);
  const InAWeek = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  InAWeek.setDate(InAWeek.getDate() + 7);

  const [value, setValue] = useState([tomorrow, InAWeek]);

  const form = useForm({
    initialValues: {
      city: "",
      date: value,
      guests: 1,
      price: [0, 5000],
      
    },
  });

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

  useEffect(() => {
    form.setFieldValue("date", value);
  }, [value]);

  useEffect(() => {
    console.log(form.values);
  }, [form.values]);

  const reformattedQuery = autocomplete?.map((item) => {
    return {
      value: item.supplerendebynavn.navn,
      group: "Sted",
      id: item.supplerendebynavn.dagi_id,
    };
  });
  const reformattedKommuner = autokommune?.map((item) => {
    return {
      value: item.kommune.navn,
      group: "Kommune",
      id: item.kommune.dagi_id,
    };
  });

  return (
    <>
      <div className="flex justify-center border-green-600 rounded-lg border-2 h-full">
        <div className="w-2/12">
          <Button
            className="w-full bg-green-600 hover:bg-green-500 rounded-none rounded-l-md flex h-full"
            size="md"
            onClick={() => setFilterOpen(true)}
          >
            <IoFilter />
            <p className="ml-4">Filter</p>
          </Button>
        </div>
        <div className="w-3/12 h-full">
          <Autocomplete
            placeholder={t.navbar.searchBar.search}
            className="w-full  h-full"
            classNames={{
              icon: "p-3",
              input:
                "border-white rounded-lg focus:border-green-400 rounded-r-none rounded-l-none  h-full",
            }}
            onItemSubmit={(value) => form.setFieldValue("city", value)}
            icon={<MagnifyingGlassIcon />}
            onChange={setQuery}
            size="lg"
            data={
              [...(reformattedKommuner ?? []), ...(reformattedQuery ?? [])] ??
              []
            }
          />
        </div>
        <div className="w-3/12">
          <DateRangePicker
            placeholder={t.navbar.searchBar.PickDateRange}
            classNames={{
              icon: "p-2",
              input: "border-white rounded-none focus:border-green-400",
            }}
            value={value}
            size="lg"
            onChange={setValue}
            inputFormat="DD MMM"
            minDate={tomorrow}
          />
        </div>
        <div className="w-2/12">
          <Select
            placeholder={t.navbar.searchBar.personer}
            classNames={{
              icon: "p-2",
              input: "border-white rounded-none focus:border-green-400",
              required: "bg-green-400",
            }}
            size="lg"
            clearable
            styles={(theme) => ({
              item: {
                // applies styles to selected item
                "&[data-selected]": {
                  "&, &:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.teal[9]
                        : theme.colors.green[5],
                    color:
                      theme.colorScheme === "dark"
                        ? theme.white
                        : theme.colors.white,
                  },
                },

                // applies styles to hovered item (with mouse or keyboard)
                "&[data-hovered]": {
                  "&, &:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.teal[9]
                        : theme.colors.green[3],
                    color:
                      theme.colorScheme === "dark"
                        ? theme.white
                        : theme.colors.white,
                  },
                },
              },
            })}
            {...form.getInputProps("guests")}
            data={[
              { value: 1, label: "1" },
              { value: 2, label: "2" },
              { value: 3, label: "3" },
              { value: 4, label: "4" },
              { value: 5, label: "5" },
              { value: 6, label: "6" },
              { value: 7, label: "7" },
              { value: 8, label: "8" },
              { value: 9, label: "9" },
              { value: 10, label: "10" },
              { value: 11, label: "11" },
              { value: 12, label: "12" },
              { value: 13, label: "13" },
              { value: 14, label: "14" },
              { value: 15, label: "15+" },
            ]}
          />
        </div>
        <div className="w-2/12">
          <Button
            className="w-full bg-green-600 hover:bg-green-500 rounded-none rounded-r-md h-full"
            size="md"
          >
            Søg
          </Button>
        </div>
      </div>
      <Filter
        form={form}
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
      />
    </>
  );
}
