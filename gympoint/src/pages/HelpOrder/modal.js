import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Title, Text, AwnserButton, ModalDiv, TextArea, OpenModalButton } from './styles';
import api from '~/services/api';
import { updateRequest } from '~/store/modules/help-order/actions';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 450,
    height: 425,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ question, orderId }) {
  const [answer, setAnswer] = useState('');

  const dispatch = useDispatch();

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  function handleSendStudentAwnser(data) {
      dispatch(updateRequest(data));
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <OpenModalButton type="button" onClick={handleOpen}>
        Responder
      </OpenModalButton>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <ModalDiv style={modalStyle} className={classes.paper}>
          <div>
            <Title id="simple-modal-title">PERGUNTA DO ALUNO</Title>
            <Text id="simple-modal-description">
                {question}
            </Text>
            <Title id="simple-modal-title">SUA RESPOSTA</Title>
            <TextArea 
               value={answer} 
               placeholder="exemplo@email.com" 
               onChange={e => setAnswer(e.target.value)} 
            />
          </div>
          <AwnserButton onClick={() => {
              handleSendStudentAwnser({ orderId, answer });
              handleClose();
          }}>
              Responder aluno
        </AwnserButton>
        </ModalDiv>
      </Modal>
    </div>
  );
}