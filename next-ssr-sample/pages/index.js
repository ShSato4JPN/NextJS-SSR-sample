import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/fetch/FetchSample">
            <a href=''>fetch</a>
          </Link>
        </li>
        <li>
          <Link href="/SSR/SSRSample">
            <a href=''>SSR</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
