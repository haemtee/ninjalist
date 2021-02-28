import Link from "next/link";
import Head from "next/head";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const EmpatKosongEmpat = () => {
  const router = useRouter();
  const [waktu, setWaktu] = useState(5);

  setInterval(() => {
    setWaktu(waktu - 1);
  }, 1000);

  useEffect(() => {
    if (waktu === 0) {
      router.push("/");
    }
  }, [waktu]);

  return (
    <>
      <Head>
        <title>Ninja List | Error not found</title>
      </Head>
      <div className="empatkosongempat">
        <h1>Opppss....</h1>
        <h2>The page your request could not be found ...</h2>
        <p>
          Go back to{" "}
          <Link href="/">
            <a className="home404">Homepage</a>
          </Link>{" "}
          in {waktu} second...
        </p>
      </div>{" "}
    </>
  );
};

export default EmpatKosongEmpat;
