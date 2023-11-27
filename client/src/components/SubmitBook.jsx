import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const SubmitBook = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      author: "",
      description: "",
      category: "",
      cover_url: "",
      published_at: "",
      is_active: true,
    },
  });
  const notify = () => {
    toast.success("New Book Added!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:8050/books/create", data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("title", { required: true, minLength: 4 })}
          placeholder="Book Title"
        />
        <input
          type="text"
          {...register("author", { required: true, minLength: 4 })}
          placeholder="Author Name"
        />
        <input
          type="text"
          {...register("description", { required: true, minLength: 4 })}
          placeholder="Description"
        />
        <input
          type="text"
          {...register("category", { required: true, minLength: 4 })}
          placeholder="Category"
        />
        <input
          type="url"
          {...register("cover_url", { required: true, minLength: 4 })}
          placeholder="Cover URL"
        />
        <input
          type="date"
          {...register("published_at", { required: true, minLength: 4 })}
          placeholder="Published Date"
        />
        <label htmlFor="Active">Book Must Be Active</label>
        <input
          type="checkbox"
          {...register("is_active", { required: true })}
          placeholder="is_active"
        />
        <button onClick={notify}>Submit</button>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </form>
    </>
  );
};

export default SubmitBook;
