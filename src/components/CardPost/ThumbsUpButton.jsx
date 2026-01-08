import { IconButton } from "../IconButton";
import { IconThumbsUp } from "../icons/iconThumbsUp";

export const ThumbsUpButton = ({ loading }) => {
  return (
    <IconButton disabled={loading}>
      <IconThumbsUp />
    </IconButton>
  );
};
