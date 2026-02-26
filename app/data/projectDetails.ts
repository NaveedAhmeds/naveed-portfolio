export type ProjectDetail = {
  slug: string;
  title: string;
  intro: string;
  sections?: Array<{
    heading: string;
    body: string;
    image?: {
      src: string;
      alt: string;
      side?: "left" | "right";
    };
  }>;
  video?: {
    youtubeId: string;
    caption?: string;
  };
  architecture?: {
    summary: string;
    stack: string[];
    bullets: string[];
  };
  code?: Array<{
    title?: string;
    language?: string;
    snippet: string;
  }>;
};

export const projectDetails: ProjectDetail[] = [
  {
    slug: "self-driving-sim",
    title: "Self‑Driving Car Simulator",
    intro:
      "An end‑to‑end steering‑angle predictor for a self‑driving car simulator, inspired by Nvidia’s PilotNet.",
    sections: [
      {
        heading: "Behavioral Cloning & Data Acquisition",
        body:
          "The foundation of the model is a supervised learning pipeline built on human driving behavior. Data was captured by manually navigating the simulator, logging synchronized front‑facing camera frames and steering angles to `driving_log.csv`. To ensure the model learned recovery strategies rather than just lane‑following, the training set included deliberate recovery maneuvers—recording the vehicle correcting itself from lane boundaries back to the center.",
        image: {
          src: "/projects/self-driving/training-frame.jpg",
          alt: "Simulator training frame showing the vehicle perspective and lane markings",
          side: "right",
        },
      },
      {
        heading: "Data Pipeline & Augmentation Strategy",
        body:
          "Raw camera feeds contain high variability (sky, trees, hoods) that contributes noise. A preprocessing pipeline crops frames to the road region of interest (ROI) and normalizes pixel values to a YUV color space, matching the PilotNet input specification (66×200×3). To prevent overfitting to the specific track layout, I implemented a dynamic augmentation generator. This applies random horizontal flips, brightness adjustments, and geometric shifts—crucially adjusting the steering label for shifted images to teach the model how to steer back to center from any lateral position.",
        image: {
          src: "/projects/self-driving/steering-histogram.png",
          alt: "Histogram of steering angles demonstrating balanced data distribution",
          side: "left",
        },
      },
    ],
    video: {
      youtubeId: "1mPgNzm6Ics",
      caption:
        "Autonomous inference loop: The model processes live camera frames in real-time, outputting smooth steering controls to navigate the track.",
    },
    architecture: {
      summary:
        "The system creates a closed-loop control system where a Python Flask server receives telemetry from the Unity-based simulator, preprocesses the image frame, and queries the TensorFlow inference engine for a steering angle.",
      stack: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
      bullets: [
        "Architecture: 5-layer strided convolutional network (PilotNet) followed by 3 fully connected layers.",
        "Optimization: Adam optimizer with Mean Squared Error (MSE) loss function for regression stability.",
        "Data Processing: Real-time generator for 20,000+ augmented samples per epoch to ensure generalization.",
        "Deployment: Flask-based socket.io wrapper handling bidirectional communication with the simulation engine.",
        "Performance: Achieved successful autonomous navigation on both training and unseen validation tracks.",
      ],
    },
    code: [],
  },

  {
    slug: "smile-detector",
    title: "Smile Detector Pipeline",
    intro:
      "A real‑time computer vision pipeline that detects faces, extracts a stable mouth ROI, and classifies smiles with lightweight preprocessing tuned for consistent results across lighting and framing changes.",
    sections: [
      {
        heading: "Pipeline overview",
        body:
          "The pipeline is designed to be fast and robust: capture a frame, detect the face, derive a mouth region of interest (ROI), preprocess the ROI, then compute a smile decision. The goal is low-latency inference and stable outputs suitable for live overlays and demos.",
        image: {
          src: "/projects/smile-detector.webp",
          alt: "Smile detector preview",
          side: "right",
        },
      },
      {
        heading: "Face detection & ROI extraction",
        body:
          "After face detection, the pipeline computes a consistent ROI relative to the detected face bounds. Constraining the analysis to the mouth/cheek region reduces background noise and improves signal quality compared to running classification across the full frame.",
      },
      {
        heading: "Preprocessing & stability tuning",
        body:
          "To keep predictions steady across frames, the ROI is normalized (resize + grayscale/contrast adjustments). Thresholds and smoothing are tuned to reduce flicker and maintain stable detections under minor head movement and changing illumination.",
      },
      {
        heading: "Visual output & overlays",
        body:
          "This section showcases the visual output of the smile detector: bounding boxes around faces, smile labels, and any live overlay UI. Replace this placeholder copy and image path once you capture a representative frame or mockup.",
        image: {
          src: "/projects/smile.jpg",
          alt: "Placeholder for smile detector output overlay",
          side: "left",
        },
      },
    ],
    architecture: {
      summary:
        "A minimal OpenCV-first design: face detection provides a stable reference box, ROI extraction isolates the mouth region, preprocessing normalizes the ROI, and the decision stage outputs a smile state for UI overlays or event triggers.",
      stack: ["Python", "OpenCV"],
      bullets: [
        "Input: webcam/video frames processed in a tight per-frame loop.",
        "Detection: face detection + stable mouth ROI derivation.",
        "Preprocessing: normalization steps to reduce lighting sensitivity.",
        "Decision: lightweight smile classification tuned for real-time responsiveness.",
        "Output: a clean smile indicator suitable for overlays and demos.",
      ],
    },
    code: [],
  },
];
