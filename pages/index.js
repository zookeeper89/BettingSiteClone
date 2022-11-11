import Navbar2 from "components/Menu/Navbar2";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import Link from "next/link";

import en from "locales/en";
import da from "locales/da";
import de from "locales/de";
import { useRouter } from "next/router";
import Footer from "components/Menu/Footer";
import TopHero from "components/Hero/TopHero";
import CityFeatures from "components/SecondaryFeatures/CityFeatures";
import Accordion from "components/Accordion/AccordionProps";
import PrimaryFeatures from "components/Features/PrimaryFeatures";

export default function Home() {
  //Skift sprog i18n
  const router = useRouter();
  const { locale } = router;
  const t =
    locale === "da" ? da : locale === "de" ? de : locale === "en" ? en : "";

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar2 />
      <TopHero />

      <CityFeatures />

      <PrimaryFeatures
        title="Udlej dit sommerhus"
        text="Tjen op til 43.200 DKK skatterfrit når du udlejer dit sommerhus hos os"
        buttontext="Tilmeld"
      />

      <Accordion
        title1="Hvor mange huse udlejer vi?"
        description1="Hos DanCenter udlejer vi mere end 6.400 sommerhuse og ferieboliger rundt om i hele Danmark. Derudover har vi mere end 800 sommerhuse i Sverige , mere end 500 hytter i Norge og mere end 200 sommerhuse i Nordtyskland ."
        title2="Kan man leje et sommerhus en enkelt weekend?"
        description2="Ja! De fleste af vores sommerhuse er mulige at leje for blot 2 døgn og med valgfri ankomstdag. Så det er muligt at tage på weekendtur i sommerhus. Dog gælder det ikke i højsæsonen."
        title3="Jeg vil gerne udleje mit sommerhus - Hvordan gør jeg?"
        description3="Det kan være en rigtig god forretning af udleje sit sommerhus, da de første 43.200 kr. du får i lejeindtægt i 2022 er skattefri. DanCenter står for alt det praktiske ved udlejning af dit sommerhus. Det er alt fra rengøring, nøgleudlevering, forsikring og markedsføring gennem vores egne hjemmesider samt gennem samarbejdspartnere. Kontakt os for at høre mere om hvordan du kan udleje dit sommerhus med DanCenter."
        title4="Hvilke fordele er der ved sommerhusudlejning gennem jer?  "
        description4="Vi tilbyder rabat til nogle af de bedste attraktioner i Danmark, når du lejer sommerhus gennem os. Vælger du at booke i sidste øjeblik, så tilbyder vi last minute tilbud, hvor du kan spare op til 20% af normalprisen. Gennem vores 32 lokalkontorer rundt om i landet tilbyder vi den bedste service under dit ophold. Har du spørgsmål i løbet af din ferie, står vi klar til at hjælpe dig."
      />

      <Footer />
    </div>
  );
}
