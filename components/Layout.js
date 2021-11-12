import Toolbar from './Toolbar'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({ children, title, author }) => {


    return (
        <>
            <Head>
                <title> Andzelika JPG | {title}</title>
            </Head>
            <Toolbar title={title} />
            {children}
            <Footer author={author} />
        </>
    )
}

export default Layout