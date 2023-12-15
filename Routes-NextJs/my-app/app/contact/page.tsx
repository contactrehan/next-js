import Link from "next/link";


export default function Contact() {
  return (
    <>
      <h1>This is Contact Page</h1>
      <br />
      <Link href={"/contact/ceo"}>
          <button about="ceo">ceo</button>
          </Link>
    </>
  );
}
