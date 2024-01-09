import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import ProfilePhoto from '@/components/Common/ProfilePhoto'
import { Github, RedHeart } from '@/components/Icons'
import { useUser } from '@/context/user'
import classNames from 'classnames'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function SignIn() {
  const { user, settings } = useUser()
  const [loading, setLoading] = useState(false)
  const [userName, setUserName] = useState('')
  const [userPassword, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async e => {
    setLoading(true)
    e.preventDefault()
    setError('')
    const result = await signIn('credentials', {
      username: userName,
      password: userPassword,
      redirect: false,
      // callbackUrl: '/login',
    })
    setLoading(false)

    if (result.ok) {
      router.push('/panel')
    } else {
      setError('incorrect username or password')
    }
  }

  return (
    <div className="mx-5 flex h-screen items-center justify-center bg-base-4">
      <div className="w-full max-w-[26rem]">
        <div className="flex flex-col items-center gap-2">
          <div className="relative h-16 w-16">
            <Image alt="" src="/img/icons/login-page.svg" fill />
          </div>
          <h1 className="text-4xl font-bold">Welcome back.</h1>
          <p className="text-xl">Sign in to your Personext dashboard</p>
        </div>
        <div className="mt-10">
          <NewCard className="flex justify-center">
            <div className="flex w-full flex-col items-center">
              <ProfilePhoto src={user.image} />

              <h2 className="text-lg font-semibold">{user.fullName}</h2>

              <NewChip
                as="button"
                className={classNames(
                  'bg-lineer-light',
                  'flex w-full justify-center gap-2.5',
                  '!rounded-[0.625rem] border border-primary-1',
                  'mt-6 px-5 py-4',
                  'text-sm font-medium'
                )}
              >
                <Github />
                Continue with GitHub
              </NewChip>

              <div className="mt-8 flex w-full items-center gap-2.5">
                <div className="w-full border-t border-primary-1" />
                <span>OR</span>
                <div className="w-full border-t border-primary-1" />
              </div>

              <form onSubmit={handleLogin}>
                <div className="mt-8 w-full">
                  <input
                    type="text"
                    className="h-14 w-full rounded-[0.625rem] border border-primary-1 pl-3 text-sm font-medium text-input text-primary-1 outline-none placeholder:text-xs placeholder:text-input"
                    placeholder="Username"
                    onChange={e => setUserName(e.target.value)}
                  />

                  <input
                    type="password"
                    className="mt-4 h-14 w-full rounded-[0.625rem] border border-primary-1 pl-3 text-sm font-medium text-input text-primary-1 outline-none placeholder:text-xs placeholder:text-input"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                  />

                  <Link
                    href="#"
                    className="mt-4 inline-block text-xs text-[#0366D6]"
                  >
                    Forgot your password?
                  </Link>

                  {error && (
                    <div className="mt-4 text-xs text-red-400">{error}</div>
                  )}

                  <NewChip
                    as="button"
                    type="submit"
                    disabled={loading}
                    className={classNames(
                      'bg-black',
                      'flex w-full justify-center',
                      '!rounded-[0.625rem]',
                      'mt-3 px-5 py-4',
                      'text-sm font-medium text-white',
                      loading && 'opacity-50'
                    )}
                  >
                    Continue
                    <div
                      className={classNames(
                        'loading invisible right-2 z-20 border-base-2 border-t-primary-6 opacity-0 duration-500',
                        loading && '!visible ml-3 opacity-100'
                      )}
                    />
                  </NewChip>
                </div>
              </form>
            </div>
          </NewCard>

          <div className="mt-5 flex items-center justify-center gap-1 text-xs font-normal text-[#8E8E8E]">
            Made with Personext Built with <RedHeart /> by fabrikod
          </div>
        </div>
      </div>
    </div>
  )
}
