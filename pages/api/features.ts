import { NextApiRequest, NextApiResponse } from "next";

type Feature = {
  featureTitle: string;
  featureDescription: string;
};

const featuresData = [
  {
    featureTitle: "Send Money",
    featureDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed maximus odio.",
  },
  {
    featureTitle: "Money Request",
    featureDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed maximus odio.",
  },
  {
    featureTitle: "Pay Bill",
    featureDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed maximus odio.",
  },
  {
    featureTitle: "Mobile Recharge",
    featureDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed maximus odio.",
  },
];
