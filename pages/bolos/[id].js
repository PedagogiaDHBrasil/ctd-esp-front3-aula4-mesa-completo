import React from "react";
import Link from "next/link";

export default function Bolos({ bolos }) {
  return (
    <section>
      <Link href="/">
        <a className="back">Voltar</a>
      </Link>
      <article className="post-card">
        <img src={bolos.image} alt="Imagens" />
        <h2>{bolos.title}</h2>

        <p>{bolos.description}</p>

        <h3>Modo de preparo</h3>
        <p>{bolos.text}</p>
      </article>
    </section>
  );
}

export async function getStaticProps({ params }) {
  const bolos = await fetch(
    `https://62b4dc33530b26da4cc60791.mockapi.io/bolos/${params.id}`
  )
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
    })
    .then((respostaEmObjeto) => respostaEmObjeto);

  return {
    props: {
      bolos,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
      {
        params: {
          id: "3",
        },
      },
      {
        params: {
          id: "4",
        },
      },
      {
        params: {
          id: "5",
        },
      },
    ],
    fallback: false,
  };
}
