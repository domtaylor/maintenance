import Header from './header'
import Footer from './footer'
import { BasicLottieComponent } from './lottie'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
    <Header />
      <div className="min-h-screen">
        <main>{children}</main>
        <BasicLottieComponent />
      </div>
      <Footer />
    </>
  )
}

export default Layout
