import sharp from "sharp";
import FormData from "form-data";
import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({
  path: path.join(path.resolve(__dirname,'..','..','..'), ".env"),
});

const STRAPI_URL = process.env.STRAPI;
const TOKEN = process.env.TOKEN;
const CDN = process.env.CDN_URL + "/content";

const args = process.argv.slice(2);
const argValues = args.reduce((acc, arg) => {
  const [key, value] = arg.split("=");
  acc[key] = value;
  return acc;
}, {});
const validargs = ["--skip_done", "--batch", "--from", "--follow_batch"];

const currentPath = path.resolve(__dirname);
let resultFile = "{}";
try {
  // let resultFile = fs.readFileSync("./result.json");
  resultFile = fs.readFileSync(path.join(currentPath, "result.json"));
  if (!resultFile) {
    resultFile = "{}";
  }
}catch(e){
  resultFile = "{}";
}
const results = JSON.parse(resultFile);

const url = `${STRAPI_URL}/api/blogs`;
const response = await fetch(url, {
  method: "GET",
  headers: {
    Authorization: "Bearer " + TOKEN,
  },
});

const allBlogsResponse = await response.json();
const allBlogs = Number(allBlogsResponse.meta.pagination.total);

const doJob = async (index) => {
  if (results[index] && argValues["--skip_done"]) {
    console.log("Already done for", index);
    return;
  }
  try {
    const cdn = CDN;
    const url = `${STRAPI_URL}/api/blogs/${index}?populate[0]=header_image`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + TOKEN,
      },
    });

    const data = await response.json();
    const blog = data.data;
    const imageUrl =
      blog?.attributes?.header_image?.data?.attributes?.url?.split("?")?.[0];

    const toWidth = 842;
    const toHeight = 450;
    const imageRegex = /https:\/\/.*\/(.*)/;
    const imageName = imageUrl.match(imageRegex)[1];
    const cdnImageUrl = `${cdn}/${imageName}`;
    const imageResponse = await axios({
      url: cdnImageUrl,
      responseType: "arraybuffer",
    });


    const imageBuffer = Buffer.from(imageResponse.data, 'binary');
    const sharpImage = sharp(imageBuffer);
    
    // Crop the image
    let cropppedImage = await sharpImage
    .resize(toWidth, toHeight, {
      fit: "cover",
      position: "top",
    }).webp();
    
    // Just convert to webp
    // const cropppedImage = sharpImage.webp();
    
    // Image upload url
    const uploadUrl = `${STRAPI_URL}/api/upload`;
    
    // Create a form data
    const formData = new FormData();
    formData.append("files", await cropppedImage.toBuffer(), {
      filename: "image.webp",
      contentType: "image/webp",
    });

    const uploadFromAxios = await axios.post(uploadUrl, formData, {
      headers: {
        ...formData.getHeaders(),
        Authorization: "Bearer " + TOKEN,
  },
    });

    // Update the blog
    const payload = {
      header_image: uploadFromAxios.data[0].id,
    };

    const res = await axios.put(
      `${STRAPI_URL}/api/blogs/${blog.id}`,
      {
        data: payload,
      },
      {
        headers: {
          authorization: "Bearer " + TOKEN,
        },
      }
    );
    console.log("Done for", blog.id, blog.attributes.slug, res.status);
    results[index] = true;
  } catch (e) {
    // If axios error, then print the status code
    if (axios.isAxiosError(e)) {
      console.log("Error", e);
      console.log("Error from response", e.response.data.error);
    } else {
      console.log("Error", e);
    }
    console.log("Failed for", index);
    results[index] = false;
  } finally {
    fs.writeFileSync(path.join(currentPath, "result.json"), JSON.stringify(results));
  }

  return;
};

let index = 1;
let from = argValues["--from"] || 1;
index = from;
const runner = async () => {
  const batch = argValues["--batch"] || 10;
  const followBatch = argValues["--follow_batch"] || false;
  if (index == (Number(from) + Number(batch) - 1)) {
    console.log("Done for the batch");
    console.log("Next batch will start from", index + 1);
    if (followBatch) {
      console.log("Following the batch");
      from = index;
    } else {
      return;
    }
  }
  await doJob(index);
  index++;
  setTimeout(runner, 1000);
};

runner();
