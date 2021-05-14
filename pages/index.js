import Link from "next/link";

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href="/b" as="/a">
            <a>a</a>
          </Link>
        </li>
        <li>
          <Link href="/a" as="/b">
            <a>b</a>
          </Link>
        </li>
      </ul>
      <p>Este es un sitio web en Next.js</p>
      <p>Api rest: %url%:3000/api</p>
      <p>SOAP service: %url%:3000/wsdl?wsdl</p>
    </>
  );
}
