import { FormLabel, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
// import 'react-phone-number-input/style.css'

export default function Index({
    value,
    label,
    name,
    htmlFor,
    onChange,
    defaultCountry,
    handleCountryChange
}) {
    const { colorMode } = useColorMode()
    const [countryCode, setCountryCode] = useState(defaultCountry)
    const HandleChange = (value) => {
        const Replaces = ["+00", "+0"]
        Replaces.forEach((item) => {
            if (value && value.startsWith(item)) {
                value = `+${value.slice(item.length)}`
            }
        })
        onChange(value)
    }
    const OnChangeCCode = (value) => {
        console.log(value)
        if (handleCountryChange) {
            handleCountryChange(value)
        }
        setCountryCode(value)
    }
    return (
        <>
            {label && (
                <FormLabel
                    my={'0'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    htmlFor={htmlFor ? htmlFor : `${name}_${value}_id`} >
                    <span> {label}</span>
                    {!countryCode ? (
                        <span style={{
                            color: colorMode == 'dark' ? 'cyan' : '#42A5F5'
                        }}>
                            Number Starts With Contry Code
                        </span>
                    ) : (
                        <span style={{
                            color: colorMode == 'dark' ? 'cyan' : '#42A5F5'
                        }}>
                            {value}
                        </span>
                    )}
                </FormLabel>
            )}
            <PhoneInput
                defaultCountry={defaultCountry}
                name={name ?? 'PhoneNumber'}
                value={value}
                id={htmlFor}
                onChange={HandleChange}
                className="input-auth"
                style={{
                    background: 'transparent',
                    color: colorMode === 'dark' ? 'white' : '#212121',
                    // fontSize: '15px'

                }}
                onCountryChange={OnChangeCCode}
            />
        </>
    )
}
