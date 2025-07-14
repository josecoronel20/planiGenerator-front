
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  console.log('🔄 Middleware ejecutándose para:', request.nextUrl.pathname)
  
  const { pathname } = request.nextUrl
  const isPublicPath = pathname === '/login' || pathname === '/register'

  const token = request.cookies.get('token')?.value
  const isLoggedIn = !!token
    
  console.log('📊 Middleware - Path:', pathname, 'IsLoggedIn:', isLoggedIn, 'IsPublicPath:', isPublicPath)

  if (!isLoggedIn && !isPublicPath) {
    console.log('🚫 Redirecting to login')
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isLoggedIn && isPublicPath) {
    console.log('🏠 Redirecting to home')
    return NextResponse.redirect(new URL('/', request.url))
  }

  console.log('✅ Middleware completado')
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
