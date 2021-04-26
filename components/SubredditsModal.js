import React from "react";
import Modal from "react-modal";
import Subreddits from "./Subreddits";

const SubredditsModal = ({ subreddits, setSubreddits, onClose, ...props }) => {
  return (
    <Modal
      closeTimeoutMS={200}
      contentLabel="modal"
      style={modalStyles}
      {...props}
    >
      <Subreddits
        subreddits={subreddits}
        setSubreddits={setSubreddits}
        onClose={onClose}
      />
    </Modal>
  );
};

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0, 0.45)",
    zIndex: "20",
  },
  content: {
    position: "absolute",
    top: "auto",
    left: "0px",
    right: "0px",
    bottom: "0px",
    background: "#fafafa",
    overflow: "auto",
    padding: "0px",
    WebkitOverflowScrolling: "touch",
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",
    outline: "none",
    border: "0px",
  },
};

export default SubredditsModal;
