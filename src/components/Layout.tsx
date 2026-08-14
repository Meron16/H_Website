import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SmoothScroll from './SmoothScroll'

export default function Layout() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-ink">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}
