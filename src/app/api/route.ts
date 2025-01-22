import { db } from "@/db";

export const GET = async () => {
  try {
    const data = await db.blog.findMany({
      take: 10,
      select: {
        title: true,
        category: true,
        slug: true
      },
      orderBy: [{ view_count: "desc" }]
    });

    return Response.json(data);
  } catch (err) {
    console.error("DB ERROR: ", err);
    throw new Error("Failed to fetch the popular posts");
  }
};

export const POST = async (req: Request) => {
  const { slug, title, category } = await req.json();

  try {
    const existingPost = await db.blog.findUnique({
      where: { slug }
    });

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