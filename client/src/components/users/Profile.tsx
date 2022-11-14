/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getUser } from '@/api/resolverUser'
import { useRef } from 'react'

export const Profile = () => {
  const { status, data, error } = getUser()

  const cardRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleInput = () => {
    const inputs = cardRef.current?.querySelectorAll('input')
    inputs?.forEach(input => (input.disabled = !input.disabled))
    buttonRef.current!.textContent === 'Modify'
      ? (buttonRef.current!.textContent = 'Save')
      : (buttonRef.current!.textContent = 'Modify')
  }

  return (
    <div className='users'>
      <h2>Profile</h2>
      <>
        {status === 'loading' ? (
          <p>Loading...</p>
        ) : status === 'error' ? (
          <p>Error: {error instanceof Error && error.message}</p>
        ) : (
          <>
            <div ref={cardRef} className='card'>
              <div className='row'>
                <input type='text' name='firstname' id='firstname' value={data.firstName} disabled />
                <input type='text' name='lastname' id='lastname' value={data.lastName} disabled />
              </div>
              <div className='row'>
                <input type='tel' name='mobile' id='mobile' value={data.mobile} disabled />
                <input type='email' name='mail' id='mail' value={data.email} disabled />
              </div>
              {/* <input type='password' name='password' id='password' value={data.password} /> */}
            </div>
            <button ref={buttonRef} type='button' onClick={() => handleInput()}>
              Modify
            </button>
          </>
        )}
      </>
    </div>
  )
}
