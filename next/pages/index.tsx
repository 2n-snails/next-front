import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="CI 테스트">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
