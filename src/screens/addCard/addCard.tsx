import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../../components/taskCard/TaskCard";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: black;
  color: black;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const ButtonWrapper = styled.section`
  display: flex;
`;

const ModalButton = styled.button`
  height: 2rem;
  width: 100%;
  background: white;
  color: black;
  width: 15rem;
  margin: 2rem;
`;

interface AddCardProps {
  onSubmit: (task: Task) => void;
  onClose: () => void;
}

const AddCard = ({ onSubmit, onClose }: AddCardProps) => {
  const [title, setTitle] = useState<string>("New task...");
  const [description, setDescription] = useState<string>("Description...");
  const [comments, setComment] = useState<string[]>([]);

  const onSubmitHandler = () => {
    // add error handling and UX for missing required fields
    onSubmit({
      id: uuidv4(),
      title,
      description,
      comments,
    });
    onClose();
  };

  return (
    <Wrapper data-testid="addCardScreen">
      <Input
        data-testid="titleInput"
        defaultValue="title"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <Input
        defaultValue="description"
        data-testid="descriptionInput"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDescription(e.target.value)
        }
      />
      <Input
        defaultValue="comments"
        data-testid="commentsInput"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setComment([e.target.value])
        }
      />
      <ButtonWrapper>
        <ModalButton data-testid="submitCardButton" onClick={onSubmitHandler}>
          Submit
        </ModalButton>
        <ModalButton data-testid="closeCardButton" onClick={() => onClose()}>
          Close
        </ModalButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default AddCard;
