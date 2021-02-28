import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1>Homepage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat
          minus, blanditiis aperiam reprehenderit consequuntur magnam ipsa alias
          in harum, nihil incidunt totam veniam eius soluta itaque porro!
          Temporibus, quae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsum quaerat minus, blanditiis aperiam reprehenderit
          consequuntur magnam ipsa alias in harum, nihil incidunt totam veniam
          eius soluta itaque porro! Temporibus, quae. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsum quaerat minus, blanditiis aperiam
          reprehenderit consequuntur magnam ipsa alias in harum, nihil incidunt
          totam veniam eius soluta itaque porro! Temporibus, quae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat
          minus, blanditiis aperiam reprehenderit consequuntur magnam ipsa alias
          in harum, nihil incidunt totam veniam eius soluta itaque porro!
          Temporibus, quae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsum quaerat minus, blanditiis aperiam reprehenderit
          consequuntur magnam ipsa alias in harum, nihil incidunt totam veniam
          eius soluta itaque porro! Temporibus, quae. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsum quaerat minus, blanditiis aperiam
          reprehenderit consequuntur magnam ipsa alias in harum, nihil incidunt
          totam veniam eius soluta itaque porro! Temporibus, quae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat
          minus, blanditiis aperiam reprehenderit consequuntur magnam ipsa alias
          in harum, nihil incidunt totam veniam eius soluta itaque porro!
          Temporibus, quae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsum quaerat minus, blanditiis aperiam reprehenderit
          consequuntur magnam ipsa alias in harum, nihil incidunt totam veniam
          eius soluta itaque porro! Temporibus, quae. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsum quaerat minus, blanditiis aperiam
          reprehenderit consequuntur magnam ipsa alias in harum, nihil incidunt
          totam veniam eius soluta itaque porro! Temporibus, quae.
        </p>
        <Link href="/ninjas">
          <a className="btn">Ninja Listing </a>
        </Link>
      </div>
    </>
  );
}
