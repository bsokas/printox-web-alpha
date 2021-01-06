import { ChangeEvent, useState } from "react"

import { States, UserOptions } from "../shared/constants"
import styles from './formStyles.module.css'

type FieldType = 'first' | 'last' | 'email' | 'address' | 'city' | 'state' | 'zipcode' | 'usertype'

function SignupForm(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [state, setState] = useState('')
    const [userType, setUserType] = useState<Set<string>>(new Set<string>())

    function handleChange(e: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>, type: FieldType){
        const value = e.target.value
        console.log('User Types: ', userType)
        
        switch (type) {
            case 'first':
                setFirstName(value)
                break
            case 'last':
                setLastName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'address':
                setStreetAddress(value)
                break
            case 'city':
                setCity(value)
                break
            case 'state':
                setState(value)
                break
            case 'zipcode':
                setZipcode(value)
                break
            case 'usertype':
                if (userType.has(value)) {
                    userType.delete(value)
                    setUserType(userType)
                } else {
                    setUserType(userType.add(value))
                }
                break
        }
    }

    return (
        <form className={styles.form}>
            <label>
                First Name 
                <textarea value={firstName} onChange={e => handleChange(e, 'first')}/>
            </label>
            <label>
                Last Name
                <textarea value={lastName} onChange={e => handleChange(e, 'last')}/>
            </label>
            <label>
                Email
                <textarea value={email} onChange={e => handleChange(e, 'email')}/>
            </label>
            <label>
                Street Address
                <textarea value={streetAddress} onChange={e => handleChange(e, 'address')}/>
            </label>
            <label>
                City
                <textarea value={city} onChange={e => handleChange(e, 'city')}/>
            </label>
            <label>
                State
                <select defaultValue={state} onChange={e => handleChange(e, 'state')}>
                    {States.map(stateCode => <option value={stateCode} key={stateCode}>{stateCode}</option>)}
                </select>
            </label>
            <label>
                ZIP Code 
                <textarea value={zipcode} onChange={e => handleChange(e, 'zipcode')}/>
            </label>
            <br />
            <label>
                What sort of Printoxer are you?
                {UserOptions.map(profile => 
                    <input 
                        name={profile.optionTitle}
                        type="checkbox"
                        key={profile.optionTitle}
                        onChange={e => handleChange(e, 'usertype')}
                    />
                )}
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default SignupForm