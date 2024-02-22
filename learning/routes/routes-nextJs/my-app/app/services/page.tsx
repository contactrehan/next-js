import Link from "next/link";


export default function Services() {
  return (
    <>
      <h1>Services Page</h1>
      <ul>
        <li>
            <p><Link href={"/services/web"}>Web</Link></p>
        </li>
        <li>
            <p><Link href={"/services/mobile"}>Mobile</Link></p>
        </li>
      </ul>
    </>
  );
}
