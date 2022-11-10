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
          <h2 className="text-lg font-semibold">Pris</h2>
          <RangeSlider
            mt="xl"
            styles={{ thumb: { borderWidth: 2, padding: 3 } }}
            color="green"
            label={null}
            defaultValue={[20, 60]}
            thumbSize={26}
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
