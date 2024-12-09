import { useAuth0 } from "@auth0/auth0-react";

type CommentFormProps = {
  text: string;
  setText: Function;
  onSubmit: (e: React.FormEvent) => Promise<void>;
};

export default function CommentForm({
  text,
  setText,
  onSubmit,
}: CommentFormProps) {
  const { isAuthenticated, logout, loginWithPopup } = useAuth0();

  return (
    <form
      onSubmit={onSubmit}
      className="bg-[rgba(255,255,255,0.1)] p-6 rounded-lg shadow-md"
    >
      <textarea
        className={`w-full max-h-40 p-3 rounded-md bg-[rgba(255,255,255,0.1)] 
          text-gray-3 placeholder-gray-500 focus:outline-none 
          focus:ring-2 focus:ring-blue-600 resize-y`}
        rows={3}
        placeholder={
          isAuthenticated
            ? "What are your thoughts?"
            : "Please login to leave a comment"
        }
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={!isAuthenticated}
      />

      <div className="flex items-center mt-4">
        {isAuthenticated ? (
          <div className="flex items-center space-x-6">
            <button
              type="submit"
              className="py-2 px-6 rounded-md bg-blue-600 text-white 
                font-medium shadow-lg hover:bg-blue-light focus:ring-2 
                focus:ring-blue-400 transition disabled:opacity-50"
              disabled={!text.trim()}
            >
              Send
            </button>
            <button
              type="button"
              className="text-gray-4 hover:text-gray-2 transition"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="py-2 px-6 rounded-md bg-blue-600 text-white 
              font-medium shadow-lg hover:bg-blue-light focus:ring-2 
              focus:ring-blue-light transition"
            onClick={() => loginWithPopup()}
          >
            Log In
          </button>
        )}
      </div>
    </form>
  );
}
