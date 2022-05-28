import { Dispatch, SetStateAction, useEffect } from "react";
import ReactPlayer from "react-player";
import { IoClose } from "react-icons/io5";

type Props = {
  open: boolean;
  openModal: Dispatch<SetStateAction<boolean>>;
  setUrl: Dispatch<SetStateAction<string>>;
  url: string;
};
function TrailerModal({ open, openModal, url, setUrl }: Props) {
  const videoPlayerOptions = {
    width: "80%",
    height: "80%",
  };
  useEffect(() => {
    const addOverlay = () => {
      const body = document.querySelector("body")!;
      if (open) {
        body.classList.add("w-screen", "h-screen", "overflow-hidden");
      } else {
        body.classList.remove("w-screen", "h-screen", "overflow-hidden");
      }
    };
    addOverlay();
    return;
  }, [open]);
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } fixed top-0 left-0 z-[99] h-screen w-screen bg-secondary/20 p-8 backdrop-blur-sm md:p-0`}
    >
      <div className="relative mx-auto flex h-full w-full items-center justify-center rounded-xl px-8">
        <ReactPlayer url={url} {...videoPlayerOptions} />
        <button
          className="absolute top-5 right-5 cursor-pointer rounded-full bg-accent text-accent-content"
          onClick={() => {
            openModal(false);
            setUrl("");
          }}
        >
          <IoClose className="h-8 w-8 md:h-12 md:w-12" />
        </button>
      </div>
    </div>
  );
}

export default TrailerModal;
