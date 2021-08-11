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
        <li>
          <Link href="/zipcloud/ZipCloudSample">
            <a href=''>ZipCloud</a>
          </Link>
        </li>
        <li>
        <Link href="/blog/BlogSample">
            <a href=''>blog</a>
          </Link>
        </li>
        <li>
        <Link href="/myjsonserver/MyJsonServer_fetch">
            <a href=''>MyJsonServer(fetch)</a>
          </Link>
        </li>
        <li>
        <Link href="/myjsonserver/MyJsonServer_SSR">
            <a href=''>MyJsonServer(SSR)</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
