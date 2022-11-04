import { Button, Modal, Select } from "@mantine/core";
import { languages } from "constant/languages";
import en from "locales/en";
import da from "locales/da";
import de from "locales/de";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ChangeLang(props) {
  //Skift sprog
  const router = useRouter();
  const { locale } = router;
  const t = 
  locale === "da" ? da : locale === "de" ? de : locale === "en" ? en: "";

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };

  return (
    <Modal
      opened={props.opened}
      onClose={() => props.setOpened(false)}
      title={t.sprogmodalTitle}
      className="font-bold"
      size="lg"
    >
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 p-4">
        {languages.map((item, i) => (
          <div className="bg-gray-100  shadow-sm  rounded-lg p-4" key={i}>
            <div className="text-center p-3">
              <img className="w-full rounded-xl mb-3" src={item.icon} />
            </div>
            <div className="text-center">
              <button
                className="bg-gray-200 text-center font-semibold  hover:bg-green-500 shadow-sm hover:shadow-xl rounded-lg p-4 hover:text-white"
                onClick={changeLanguage}
                value={item.value}
              >
                {t.sprogknapTitle}
              </button>
            </div>{" "}
          </div>
        ))}
      </div>
    </Modal>
  );
}
