'use client'

import { useEffect } from "react";

import { fetchUrl } from "@/lib/utils";

const ReportViews = ({ slug, title, category }: { slug: string, title: string, category: string }) => {
  useEffect(() => {
    const postData = async () => {
      try {
        await fetch(fetchUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slug, title, category })
        });
      } catch (err) {
        console.error(`ERROR: ${err}`);
      }
    };

    postData();
  }, [slug, title, category]);

  return <></>;
};

export default ReportViews;