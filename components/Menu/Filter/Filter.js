import { Button, Group, Modal, RangeSlider } from "@mantine/core";
import { IconHeart, IconHeartBroken } from '@tabler/icons';
export default function Filter(props) {
  return (
    <>
      <Modal
        opened={props.filterOpen}
        onClose={() => props.setFilterOpen(false)}
        size="xl"
        radius={15}
        classNames={{ header: "font-bold text-xl", modal: "relative" }}
        title="Filter"
      >
        <hr></hr>

        <div className="mt-5">
          <h2 className="text-lg font-semibold">Pris pr. nat</h2>
          <RangeSlider
            mt="xl"
            styles={{ thumb: { borderWidth: 2, padding: 3 } }}
            color="green"
            defaultValue={[0, 5000]}
            step={250}
            showLabelOnHover
            marks={[
              { value: 0, label: "0 kr" },
              { value: 5000, label: "+5000 kr" },
            ]}
            thumbSize={26}
            max={5000}
            thumbChildren={[
              <IconHeart size={16} key="1" />,
              <IconHeartBroken size={16} key="2" />,
            ]}
          />
        </div>
        <div className="mt-10">
          <hr></hr>
          <h2 className="text-lg font-semibold mt-3">Pris pr. nat</h2>
          <RangeSlider
            mt="xl"
            styles={{ thumb: { borderWidth: 2, padding: 3 } }}
            color="green"
            defaultValue={[0, 5000]}
            step={250}
            showLabelOnHover
            marks={[
              { value: 0, label: "0 kr" },
              { value: 5000, label: "+5000 kr" },
            ]}
            thumbSize={26}
            max={5000}
            thumbChildren={[
              <IconHeart size={16} key="1" />,
              <IconHeartBroken size={16} key="2" />,
            ]}
          />
        </div>

        <div className="h-16"></div>
        <div class="absolute inset-x-0 bottom-0">
          <div className="flex justify-center">
            <Button className="bg-green-600 w-full mb-0 hover:bg-green-500 rounded-t-none rounded-xl h-12 text-lg">
              Søg 15 resultater
            </Button>
          </div>
        </div>

        {/* Modal content */}
      </Modal>
    </>
  );
}
