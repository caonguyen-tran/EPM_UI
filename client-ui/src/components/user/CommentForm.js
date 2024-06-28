import { useContext, useState } from "react";
import { authApi, endpoints } from "../../apis/API";
import Loading from "../../common/Loading";
import { Link} from "react-router-dom";
import { UserContext } from "../../context/Context";

const CommentForm = ({ id, loadComments }) => {
  const [textInput, setTextInput] = useState({
    content: "",
    activityId: id,
  });
  const [loading, setLoading] = useState(false);
  const currentUser = useContext(UserContext);
  const inputChange = (event) => {
    setTextInput((current) => {
      return { ...current, content: event.target.value };
    });
  };

  const commentSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let res = await authApi().post(endpoints["createComment"], textInput, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
      loadComments()
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <form class="mb-6">
      <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <label for="comment" class="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          rows="6"
          class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          placeholder="Viết bình luận..."
          required
          onChange={(e) => {
            inputChange(e);
          }}
        ></textarea>
      </div>
      {currentUser !== null ? (
        <button
          type="submit"
          class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 hover:bg-blue-800 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          onClick={commentSubmit}
        >
          {loading ? <Loading size={28} /> : <>Gửi</>}
        </button>
      ) : (
        <Link className="font-bold" to="/login">
          Đăng nhập để bình luận
        </Link>
      )}
    </form>
  );
};

export default CommentForm;
