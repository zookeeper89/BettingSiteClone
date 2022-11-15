import { Accordion } from "@mantine/core";

export default function AccordionProps(props) {
  return (
    <div className="text-center max-w-7xl mx-auto sm:px-6 lg:px-8">
      <h1 className="font-semibold text-3xl py-8">Spørgsmål og svar</h1>
      <Accordion>
        <Accordion.Item value="customization">
          <Accordion.Control>{props.title1}</Accordion.Control>
          <Accordion.Panel>{props.description1}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="flexibility">
          <Accordion.Control>{props.title2}</Accordion.Control>
          <Accordion.Panel>{props.description2}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="focus-ring">
          <Accordion.Control>{props.title3}</Accordion.Control>
          <Accordion.Panel>{props.description3}</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="4">
          <Accordion.Control>{props.title4}</Accordion.Control>
          <Accordion.Panel>{props.description4}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
