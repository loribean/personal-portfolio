'use client';
import "@/app/scss/globals.css";
import "@/app/scss/index.scss";
import Head from "next/head";
import Email from "@/app/components/Email";
import Navbar from "@/app/sections/Navbar";
import SocialIcons from "@/app/components/SocialIcons";

export default function Blog() {
  return (
    <main>
      <div>
        <Head>
          <title>Blog</title>
          <link rel="shortcut icon" href="/favicon2.ico" />
        </Head>
          <>
            <Navbar />
            <SocialIcons />
            <Email />
            <main>
            <h1 className="hero-title">Coming Soon..</h1>
            </main>
          </>
        
      </div>
    </main>
  )
}
