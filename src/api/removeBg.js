import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

// Remove background API
export const removeBgApi = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    console.log("Sending request to remove-bg API...");
    console.log("File:", file.name);

    const response = await axios.post(
      `${API_BASE_URL}/remove-bg/`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        responseType: "blob",
      }
    );

    console.log("Remove BG API Response:", {
      status: response.status,
      statusText: response.statusText,
      dataType: typeof response.data,
      dataSize: response.data?.size,
      dataConstructor: response.data?.constructor?.name,
      headers: response.headers
    });

    if (response.data && response.data.size > 0) {
      const imageUrl = URL.createObjectURL(response.data);
      console.log("Created image URL:", imageUrl);
      return imageUrl;
    } else {
      console.error("No image data received:", {
        data: response.data,
        dataSize: response.data?.size,
        dataType: typeof response.data
      });
      throw new Error("No image data received from API");
    }
  } catch (error) {
    console.error("Remove BG API Error:", error);
    if (error.response) {
      console.error("Error response:", {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data
      });
    }
    throw error;
  }
};

// Add custom background API
export const addBackgroundApi = async (originalFile, backgroundFile, position = "center", scale = "cover") => {
  const formData = new FormData();
  formData.append("file", originalFile);
  formData.append("background", backgroundFile);
  formData.append("position", position);
  formData.append("scale", scale);

  try {
    console.log("Sending request to add-background API...");
    console.log("Files:", { originalFile: originalFile.name, backgroundFile: backgroundFile.name });
    console.log("Parameters:", { position, scale });

    // First try with blob response type
    let response;
    try {
      response = await axios.post(
        `${API_BASE_URL}/add-background/`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          responseType: "blob",
        }
      );
    } catch (blobError) {
      console.log("Blob request failed, trying with JSON response type...");
      // If blob fails, try with JSON response type
      response = await axios.post(
        `${API_BASE_URL}/add-background/`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          responseType: "json",
        }
      );
    }

    console.log("API Response:", {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      dataType: typeof response.data,
      dataSize: response.data?.size,
      dataConstructor: response.data?.constructor?.name
    });

    // Handle blob response
    if (response.data && response.data.size > 0) {
      const imageUrl = URL.createObjectURL(response.data);
      console.log("Created image URL from blob:", imageUrl);
      return imageUrl;
    }
    
    // Handle JSON response
    if (response.data && typeof response.data === 'object') {
      console.log("JSON response received:", response.data);
      
      // Check for common image response formats
      if (response.data.image_url) {
        console.log("Found image_url in response:", response.data.image_url);
        return response.data.image_url;
      }
      
      if (response.data.url) {
        console.log("Found url in response:", response.data.url);
        return response.data.url;
      }
      
      if (response.data.data) {
        console.log("Found data in response:", response.data.data);
        // If it's base64 data
        if (response.data.data.startsWith('data:image/')) {
          return response.data.data;
        }
        // If it's a URL
        if (response.data.data.startsWith('http')) {
          return response.data.data;
        }
      }
      
      if (response.data.result) {
        console.log("Found result in response:", response.data.result);
        if (response.data.result.startsWith('data:image/') || response.data.result.startsWith('http')) {
          return response.data.result;
        }
      }
    }
    
    // Handle string response
    if (response.data && typeof response.data === 'string') {
      console.log("String response received:", response.data);
      // If it's a URL, return it directly
      if (response.data.startsWith('http') || response.data.startsWith('data:')) {
        return response.data;
      }
    }
    
    console.error("No valid image data found in response:", response.data);
    throw new Error("No image data received from API");
  } catch (error) {
    console.error("API Error:", error);
    if (error.response) {
      console.error("Error response:", {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data
      });
    }
    throw error;
  }
};

// Extract background only API
export const extractBackgroundApi = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    console.log("Sending request to extract-background API...");
    console.log("File:", file.name);

    const response = await axios.post(
      `${API_BASE_URL}/extract-background/`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        responseType: "blob",
      }
    );

    console.log("Extract Background API Response:", {
      status: response.status,
      statusText: response.statusText,
      dataType: typeof response.data,
      dataSize: response.data?.size,
      dataConstructor: response.data?.constructor?.name
    });

    if (response.data && response.data.size > 0) {
      const imageUrl = URL.createObjectURL(response.data);
      console.log("Created image URL:", imageUrl);
      return imageUrl;
    } else {
      console.error("No image data received:", response.data);
      throw new Error("No image data received from API");
    }
  } catch (error) {
    console.error("Extract Background API Error:", error);
    if (error.response) {
      console.error("Error response:", {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data
      });
    }
    throw error;
  }
};
