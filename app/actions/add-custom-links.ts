"use server";

import { auth } from "../lib/auth";
import { db } from "../lib/firebase";

export type LinkType = {
  title: string;
  url: string;
};

export async function addCustomLinks({
  profileId,
  link1,
  link2,
  link3,
}: {
  profileId: string;
  link1: LinkType;
  link2: LinkType;
  link3: LinkType;
}) {
  const session = await auth();

  if (!session) return;

  try {
    db.collection("profiles").doc(profileId).update({
      link1,
      link2,
      link3,
    });
  } catch (error) {
    console.log(error);
    return false;
  }
}
