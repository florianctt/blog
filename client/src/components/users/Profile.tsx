/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getUser } from '@/api/resolverUser'
import { globalStore } from '@/hooks/globalStore'
import { useEffect, useRef } from 'react'

export const Profile = () => {
  const { status, error } = getUser()
  const { dataState, setDataState } = globalStore.dataStore()

  const cardRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleInput = () => {
    const inputs = cardRef.current?.querySelectorAll('input')
    inputs?.forEach(input => (input.disabled = !input.disabled))
    buttonRef.current!.textContent === 'Modify'
      ? (buttonRef.current!.textContent = 'Save')
      : (buttonRef.current!.textContent = 'Modify')
  }

  useEffect(() => {
    dataState.length > 0 && console.log(dataState[0].firstName)
  }, [dataState])

  const updateUser = (value: string, input: string) => {
    switch (input) {
      case 'firstname':
        dataState[0].firstName = value
        return setDataState(dataState)
      case 'lastname':
        dataState[0].lastName = value
        return setDataState(dataState)
      case 'mobile':
        dataState[0].mobile = value
        return setDataState(dataState)
      case 'email':
        dataState[0].email = value
        return setDataState(dataState)
    }
    // setDataState(dataState)
  }

  return (
    <div className='users'>
      <h2>Profile</h2>
      <>
        {dataState.length < 1 ? (
          <p>Loading...</p>
        ) : (
          <>
            <div ref={cardRef} className='card'>
              <div className='row'>
                <input
                  type='text'
                  name='firstname'
                  id='firstname'
                  value={dataState[0].firstName}
                  onChange={e => updateUser(e.target.value, 'firstname')}
                  disabled
                />
                <input
                  type='text'
                  name='lastname'
                  id='lastname'
                  value={dataState[0].lastName}
                  onChange={e => updateUser(e.target.value, 'lastname')}
                  disabled
                />
              </div>
              <div className='row'>
                <input
                  type='tel'
                  name='mobile'
                  id='mobile'
                  value={dataState[0].mobile}
                  onChange={e => updateUser(e.target.value, 'mobile')}
                  disabled
                />
                <input
                  type='email'
                  name='mail'
                  id='mail'
                  value={dataState[0].email}
                  onChange={e => updateUser(e.target.value, 'email')}
                  disabled
                />
              </div>
              {/* <input type='password' name='password' id='password' value={dataState[0].password} /> */}
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
