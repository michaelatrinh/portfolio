import Head from "next/head";

type headProps = {
  children?: React.ReactNode;
  title: string;
}

export default function PageHead({ title }: headProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Michael Alexander Trinh" />
      </Head>
    </>
  )
}