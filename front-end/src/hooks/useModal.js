import { useState } from "react";

const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    console.log("Sending message:", message);
    setShowModal(false);
    setMessage("");
  };

  return {
    showModal,
    message,
    handleOpenModal,
    handleCloseModal,
    handleMessageChange,
    handleSendMessage,
  };
};

export default useModal;
