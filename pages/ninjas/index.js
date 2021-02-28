import style from "../../styles/ninjas.module.css";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return { props: { ninjas: data } };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
      </Head>
      <div>
        <h3>Ninja Listing</h3>
        {ninjas.map((ninja) => (
          <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
            <a className={style.single}>{ninja.name} </a>
          </Link>
        ))}
      </div>{" "}
    </>
  );
};

export default Ninjas;
