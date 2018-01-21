import Head from 'next/head'

import TopNav from './TopNav'

const Layout = (props) => (
  <div>
    <Head>
      <title>Hollywood Salsa Fest</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" crossOrigin="anonymous" />
      <link rel="stylesheet" href="static/css/fontawesome-all.min.css" />
      <link rel="icon" type="image/png" href="/static/favicon.ico" />
    </Head>
    <TopNav />
    { props.children }
  </div>
)

export default Layout