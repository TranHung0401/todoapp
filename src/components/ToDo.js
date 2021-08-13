import React from "react";
import Button from "@atlaskit/button";
import CheckIcon from "@atlaskit/icon/glyph/check";
import TrashIcon from "@atlaskit/icon/glyph/trash";
import styled, { css } from "styled-components";

const Buttonstyled = styled(Button)`
  text-align: left;
  margin-top: 5px;
  &,
  :hover {
    ${(p) =>
      p.isCompleted2 &&
      css`
        text-decoration: line-through;
      `}
  }

  &:hover {
    .icon-check {
      display: inline-block;
    }
  }

  .icon-check {
    display: none;
    background: #fefefe;
    border-radius: 3px;
  }

  .icon-trash {
    margin-left: 10px;
  }
`;

export default function ToDo({ todo, onCheckBtnClick, onDelteBtnClick }) {
  return (
    <>
      <Buttonstyled
        isCompleted2={todo.isCompleted}
        shouldFitContainer
        iconAfter={
          <>
            {!todo.isCompleted && (
              <span
                className="icon-check"
                onClick={() => onCheckBtnClick(todo.id)}
              >
                <CheckIcon primaryColor="#4fff4f"></CheckIcon>
              </span>
            )}
            <span
              className="icon-trash"
              onClick={() => onDelteBtnClick(todo.id)}
            >
              <TrashIcon></TrashIcon>
            </span>
          </>
        }
      >
        {todo.name}
      </Buttonstyled>
    </>
  );
}
