import { MainNav } from "@/components/MainNav";
import { getTermsofServices } from "@/app/blog/utils";
import Container from "@/components/Container";
import CustomMDX from "@/components/CustomMDX";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Services",
  description: "This page explains the terms of use of the site."
};

const Page = () => {
  let post = getTermsofServices().find(post => post.slug === "terms-of-services");

  return (
    <Container>
      <MainNav />
      <article className="prose">
        <CustomMDX source={post?.content} />
      </article>
    </Container>
  );
};

export default Page;