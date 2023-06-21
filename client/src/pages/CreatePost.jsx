import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [genaratingImg, setgenaratingImg] = useState(false);
  const [loading, setloading] = useState(false);

  const handleSubmit = () => {};

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSupriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setform({ ...form, prompt: randomPrompt });
    console.log('clicked')
  };

  const genarateImg = () => {};
  return (
    <section className="max-w-7xl ">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[900px]">
          Create imaginative and visually stunning images generated through
          DALL-E AI
        </p>
      </div>
      <form className="mt-10 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <FormField
            labelName="Your Name"
            type="text"
            placeholder="Sam Billings"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            placeholder="a painting of a fox in the style of Starry Night"
            name="prompt"
            value={form.prompt}
            onChange={handleChange}
            isSurpriseMe
            handleSupriseMe={handleSupriseMe}
          />
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {genaratingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={genarateImg}
            className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {genaratingImg ? "Genarating..." : "Genarate"}
          </button>
        </div>
        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">
            ** Once you have created the image you want, you can share it with
            others in the community **
          </p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? "Sharing..." : "Share with the Community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
