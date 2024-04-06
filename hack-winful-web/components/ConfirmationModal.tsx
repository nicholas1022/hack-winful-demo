import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface ConfirmationModalProps {
  buttonText: string;
  topic: string;
  description: string;
  onClickConfirm: () => void;
}

export default function ConfirmationModal(props: ConfirmationModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { buttonText, topic, description, onClickConfirm } = props;

  return (
    <div>
      <button
        className='font-bold py-2 px-4 rounded-full w-full bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 '
        onClick={handleOpen}
      >
        {buttonText}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {topic}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {description}
          </Typography>
          <div className='flex flex-row gap-6 justify-end pt-10'>
            <button className='btn btn-blue rounded' onClick={handleClose}>
              Cancel
            </button>
            <button
              className='btn btn-blue rounded'
              onClick={() => {
                onClickConfirm();
                handleClose();
              }}
            >
              Confirm
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
