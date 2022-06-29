import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { FC, forwardRef, ReactElement, Ref, useState } from "react";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IDialogYesNo {
  dialogTitle: string;
  content: string;
  yes: string;
  yesClickHandler: () => void;
  no: string;
  noClickHandler: () => void;
  children: JSX.Element;
}

const DialogYesNo: FC<IDialogYesNo> = ({
  children,
  dialogTitle,
  content,
  yes,
  no,
  yesClickHandler,
  noClickHandler,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleClickOpen}>{children}</div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              yesClickHandler();
              handleClose();
            }}
          >
            {yes}
          </Button>
          <Button
            onClick={() => {
              noClickHandler();
              handleClose();
            }}
          >
            {no}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogYesNo;
