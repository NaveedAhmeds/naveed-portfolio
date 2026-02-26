export type DetailedProject = {
  slug: string;
  title: string;
  tag: string;
  tech: string;
  image: string;
  repo: string;
  longSummary: string;
  screens?: { src: string; alt: string; caption?: string }[];
  architecturePoints?: string[];
  snippets?: { title: string; code: string }[];
};

export const detailedProjects: DetailedProject[] = [
  {
    slug: "self-driving-sim",
    title: "Self‑Driving Car Simulator – Behavior Cloning",
    tag: "ML · Computer Vision · CNN",
    tech: "Python · TensorFlow · OpenCV · scikit‑learn · Flask",
    image: "/projects/Self-drive.jpeg",
    repo: "https://github.com/your-user/self-driving-sim",
    longSummary:
      "A behavior‑cloning pipeline that learns end‑to‑end steering control from simulator camera frames using a CNN inspired by NVIDIA’s PilotNet. The project covers data collection, augmentation, model design, and serving predictions via a lightweight Flask API.",
    screens: [
      {
        src: "/projects/Self-drive.jpeg",
        alt: "Self-driving simulator track view",
        caption: "Simulator view used for collecting center camera frames and steering angles."
      }
    ],
    architecturePoints: [
      "Recorded driving data from the simulator (image frames + steering angles) into a structured dataset.",
      "Performed augmentation (cropping sky/hood, brightness shifts, horizontal flips) to reduce overfitting and handle lighting variations.",
      "Implemented a CNN model similar to NVIDIA PilotNet, with normalization, convolutional blocks, and fully connected layers ending in a single steering output.",
      "Used train/validation splits with early stopping and learning‑rate scheduling to stabilize training.",
      "Exposed the trained model through a Flask server that receives frames from the simulator and returns steering predictions in real time."
    ],
    snippets: [
      {
        title: "Model architecture (TensorFlow/Keras)",
        code: `model = tf.keras.Sequential([
    tf.keras.layers.Lambda(lambda x: x / 255.0 - 0.5, input_shape=(66, 200, 3)),
    tf.keras.layers.Conv2D(24, (5, 5), strides=(2, 2), activation="relu"),
    tf.keras.layers.Conv2D(36, (5, 5), strides=(2, 2), activation="relu"),
    tf.keras.layers.Conv2D(48, (5, 5), strides=(2, 2), activation="relu"),
    tf.keras.layers.Conv2D(64, (3, 3), activation="relu"),
    tf.keras.layers.Conv2D(64, (3, 3), activation="relu"),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(100, activation="relu"),
    tf.keras.layers.Dense(50, activation="relu"),
    tf.keras.layers.Dense(10, activation="relu"),
    tf.keras.layers.Dense(1)
])`
      },
      {
        title: "Flask inference endpoint",
        code: `@app.post("/predict")
def predict():
    # Receive base64-encoded image from the simulator
    payload = request.get_json()
    img = decode_image(payload["image"])
    x = preprocess(img)  # crop, resize, normalize
    steering = float(model.predict(x[None, ...])[0][0])
    return {"steering": steering}`
      }
    ]
  }
];
