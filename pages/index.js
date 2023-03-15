import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>웹진'결'서버교체 안내</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="웹진'결'서버교체 안내" />
        <p className="description">
          웹진'결'서버 안정화 작업을 진행중에 있습니다. 
        </p>
        <p className="description">
          빠른 시일 내에 복구하고, 안내 하겠습니다. (진행 ~ 2023.03.18)
        </p>
      </main>

      <Footer />
    </div>
  )
}
