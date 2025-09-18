import axios from "axios";

export const removeBgApi = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(
      "https://harth0.duckdns.org/remove-bg/",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        responseType: "blob",
      }
    );

    if (response.data && response.data.size > 0) {
      const imageUrl = URL.createObjectURL(response.data);
      return imageUrl;
    } else {
      throw new Error("No image data received from API");
    }
  } catch (error) {
    throw error;
  }
};
