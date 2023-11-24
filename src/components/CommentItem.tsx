import React, {
  useContext,
} from 'react';
import { Comment } from '../types/Comment';
import { CommentContext } from './Context/CommentContext';

type Props = {
  comment: Comment;
};

export const CommentItem: React.FC<Props> = ({ comment }) => {
  const {
    id,
    name,
    email,
    body,
  } = comment;

  const { deleteComment } = useContext(CommentContext);

  return (
    <article
      className="message is-small"
      data-cy="Comment"
    >
      <div className="message-header">
        <a href={`mailto:${email}`} data-cy="CommentAuthor">
          {name}
        </a>
        <button
          data-cy="CommentDelete"
          type="button"
          className="delete is-small"
          aria-label="delete"
          onClick={() => deleteComment(id)}
        >
          delete button
        </button>
      </div>

      <div className="message-body" data-cy="CommentBody">
        {body}
      </div>
    </article>
  );
};