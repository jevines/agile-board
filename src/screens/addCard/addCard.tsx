import React, { useState } from "react";
import styled from "styled-components";
import { Task } from "../../components/taskCard/TaskCard";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const SubmitButton = styled.button`
  height: 5rem;
  background-color: white;
  color: black;
  width: 15rem;
  margin: 2rem;
`;

interface AddCardProps {
  onSubmit: (task: Task) => void;
  onClose: () => void;
}

const AddCard = ({ onSubmit, onClose }: AddCardProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [comments, setComment] = useState<string[]>([]);

  const onSubmitHandler = () => {
    // add error handling and UX for missing required fields

    onSubmit({
      id: 1234,
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
      <SubmitButton data-testid="submitCardButton" onClick={onSubmitHandler}>
        Submit
      </SubmitButton>
    </Wrapper>
  );
};

export default AddCard;
