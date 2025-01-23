import { MainNav } from "@/components/MainNav";
import { getPrivacyPolicy } from "@/app/blog/utils";
import Container from "@/components/Container";
import CustomMDX from "@/components/CustomMDX";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "This page explains the privacy policy of the site."
};

const Page = () => {
  let post = getPrivacyPolicy().find(post => post.slug === "privacy-policy");

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