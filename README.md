# 🌌 AI Image Generator

Turn your ideas into stunning AI-generated artwork with **Stable Diffusion XL** via Hugging Face API.
Generate images directly from your browser with a clean React interface and a local Node.js backend to keep your API key secure.

---

## ⚡ Features

* Generate high-quality images using **Stable Diffusion XL Base 1.0**
* Input your prompt and get instant AI-generated artwork
* Clean, responsive React interface with loading states
* Secure backend to keep your Hugging Face API key safe
* Default placeholder image when no image is generated
* Footer with customizable credit

---

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd ai-image-generator
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Setup Backend

```bash
cd server
npm install express node-fetch cors dotenv
```

Create a `.env` file in the `server/` folder:

```
HF_TOKEN=YOUR_HUGGINGFACE_API_KEY
```

> You can get your Hugging Face token from [https://huggingface.co/settings/tokens](https://huggingface.co/settings/tokens).

### 4. Run Backend

```bash
node index.js
```

Backend will run at `http://localhost:3001`.

### 5. Run Frontend

```bash
cd ..
npm start
```

Frontend will run at `http://localhost:3000`.

---

## 🖌️ Usage

1. Type a description of your image in the input box.
2. Click the **Sparkles** button.
3. Wait a few seconds while the image is generated.
4. The AI-generated image will appear in the placeholder.
5. See the footer credit at the bottom of the page.

---

## ⚙️ Configuration Tips

* **Steps / Resolution:** You can modify the backend to adjust `num_inference_steps` or image size for faster generation.
* **Default Image:** Change the placeholder by replacing `default_image.jpeg` in `/src/assets`.

---

## 📂 Folder Structure

```
ai-image-generator/
│
├─ src/                   # React frontend
├─ public/
├─ server/                # Node.js backend
│   ├─ index.js
│   └─ .env
├─ .gitignore
├─ LICENSE
├─ package.json
└─ README.md
```

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

✨ Enjoy creating AI art!
