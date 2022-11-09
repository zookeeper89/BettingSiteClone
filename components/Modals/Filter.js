import { Button, Modal, Select } from "@mantine/core";
import { languages } from "constant/languages";
import en from "locales/en";
import da from "locales/da";
import de from "locales/de";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Filter(props) {
  //Skift sprog
  const router = useRouter();
  const { locale } = router;
  const t = 
  locale === "da" ? da : locale === "de" ? de : locale === "en" ? en: "";


  return (
    <Modal
      opened={props.opened}
      onClose={() => props.setOpened(false)}
      title="Filter"
      className="font-bold"
      size="lg"
    >
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 p-4">
 
      </div>
    </Modal>
  );
}
