import { db } from "@/db";

export const GET = async () => {
  return new Response('Hello', { status:200 });
};

export const POST = async (req: Request) => {
  const { slug, title, category } = await req.json();

  try {
    const existingPost = await db.blog.findUnique({
      where: { slug }
    });

    console.log({ existingPost });

    if (existingPost) {
      await db.blog.update({
        where: { slug },
        data: {
          view_count: { increment: 1 }
        }
      });
    } else {
      await db.blog.create({
        data: {
          slug,
          title,
          category
        }
      });
    }
  } catch (err) {
    console.error("Error updating page view", err);
    return new Response("Failed to post to DB", { status: 500 });
  }

  return new Response("Successfully posted to DB", { status: 200 });
}