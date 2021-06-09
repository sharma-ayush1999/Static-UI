import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import fullImg from '../../../images/fullImg.png';
import overlay from '../../../images/overlay.png';
import './FullView.css';

export const FullView = ({open, handleClose}: any) => {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <>
        <img className="fullView" src={fullImg} alt="family" />
        <img className="fv-overlay" src={overlay} alt='overlay' />
        </>
      </Modal>
    </div>
  );
};
