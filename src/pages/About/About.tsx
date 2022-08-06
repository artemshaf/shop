import { useState } from "react";
import Modal from "../../components/Container-components/Modal/Modal";
import { PromoCardList } from "../../components/Container-components/Promo-card/Promo-cardList";
import { Button } from "../../components/UI-components/Button/Button";
import Textarea from "../../components/UI-components/Textarea/Textarea";

export const About = (): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Button appearence="dark" onClick={() => setModalIsOpen(true)}>
        Show content
      </Button>
      <Modal open={modalIsOpen} setOpen={setModalIsOpen}>
        <PromoCardList />
      </Modal>
      <Textarea />
    </>
  );
};
