import type { Comment } from "../../interfaces";
import distanceToNow from "../../lib/dateRelative";
import { useAuth0 } from "@auth0/auth0-react";

type CommentListProps = {
  comments?: Comment[];
  onDelete: (comment: Comment) => Promise<void>;
};

export default function CommentList({ comments, onDelete }: CommentListProps) {
  const { user } = useAuth0();

  return (
    <div className="space-y-6 mt-10">
      {comments && comments.length > 0 ? (
        comments.map((comment) => {
            const isAuthor = user && user.sub === comment.user.sub;
          const isAdmin =
            user && user.email === process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL;

          return (
            <div
              key={comment.created_at}
              className="flex p-4 bg-[rgba(255,255,255,0.1)] rounded-lg shadow-md"
            >
              {/* User Avatar */}
              <div className="flex-shrink-0">
                <img
                  src={comment.user.picture}
                  alt={comment.user.name}
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-blue-600"
                />
              </div>

              {/* Comment Content */}
              <div className="flex-grow ml-4">
                {/* User Details */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-semibold">{comment.user.name}</p>
                    <time className="text-sm text-gray-4">
                      {distanceToNow(comment.created_at)}
                    </time>
                  </div>

                  {/* Delete Button */}
                  {(isAdmin || isAuthor) && (
                    <button
                      className="text-gray-5 hover:text-[#F44336] transition"
                      onClick={() => onDelete(comment)}
                      aria-label="Delete comment"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-11a1 1 0 10-1.414-1.414L10 8.586 8.414 7A1 1 0 107 8.414l1.586 1.586L7 11.414a1 1 0 001.414 1.414L10 10.414l1.586 1.586a1 1 0 001.414-1.414L11.414 10l1.586-1.586z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Comment Text */}
                <p className="mt-2 text-gray-3">{comment.text}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-4 text-center">No comments yet. Be the first to leave one!</p>
      )}
    </div>
  );
}
