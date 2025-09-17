import axios from "axios";

export const removeBgApi = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(
    "http://16.170.72.102:8000/remove-bg/",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
      responseType: "blob",
    }
  );

  return URL.createObjectURL(response.data);
};
