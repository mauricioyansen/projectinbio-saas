import "server-only";
import { db } from "../lib/firebase";
import { LinkType } from "../actions/add-custom-links";

export type ProfileDataType = {
  userId: string;
  name?: string;
  description?: string;
  imagePath?: string;
  totalVisits: number;
  createdAt: number;
  socialMedias?: {
    github: string;
    instagram: string;
    linkedin: string;
    twitter: string;
  };
  link1?: LinkType;
  link2?: LinkType;
  link3?: LinkType;
  updatedAt?: number;
};

export type ProjectDataType = {
  id: string;
  userId: string;
  projectName: string;
  projectDescription: string;
  projectUrl: string;
  imagePath: string;
  createdAt: number;
  totalVisits?: number;
};

export async function getProfileData(profileId: string) {
  const snapshot = await db.collection("profiles").doc(profileId).get();

  return snapshot.data() as ProfileDataType;
}

export async function getProfileProjects(profileId: string) {
  const snapshot = await db
    .collection("profiles")
    .doc(profileId)
    .collection("projects")
    .get();

  return snapshot.docs.map((doc) => doc.data()) as ProjectDataType[];
}
