import { Modal } from "@mantine/core";
import { languages } from "constant/languages";

export default function ChangeLang(props) {
  return (
    <Modal
      opened={props.opened}
      onClose={() => props.setOpened(false)}
      title="Vælg sprog"
      className="font-bold"
      size="lg"
    >
      <div className="grid grid-cols-3 gap-12 p-4">
        {languages.map((item, i) => {
          return (
            <div className="bg-gray-100 hover:bg-green-500 shadow-sm cursor-pointer hover:shadow-xl rounded-lg p-4 hover:text-white" key={i}>
              <div className="text-center p-3">
                <img className="w-full rounded-xl mb-3" src={item.icon} />
              </div>
              <p className="text-center font-semibold">{item?.name}</p>
            </div>
          );
        })}
      </div>
    </Modal>
  );
}
