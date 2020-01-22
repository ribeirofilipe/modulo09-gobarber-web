import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Title, Text, AwnserButton, ModalDiv, TextArea } from './styles';
import api from '~/services/api';

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

async function handleAnwserStudent(id, answer) {
    const response = api.put(`help-orders/${id}/answer`, {
        answer
    });
}

export default function SimpleModal({ question, orderId }) {
  const [answer, setAnswer] = useState('');

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
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
          <AwnserButton onClick={() => handleAnwserStudent(orderId, answer)}>
              Responder aluno
        </AwnserButton>
        </ModalDiv>
      </Modal>
    </div>
  );
}