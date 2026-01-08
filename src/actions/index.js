"use server";

import db from "../../prisma/db";

export default async function incrementThumbsUp(post) {
  await db.post.update({
    where: {
      id: post.id,
    },
    date: {
      likes: {
        increment: 1,
      },
    },
  });
}
