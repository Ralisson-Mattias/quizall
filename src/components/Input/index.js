import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`

const InputText = styled.input`
    width: 100%;
    padding: 15px 10px;
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
`

export default function Input({ placeholder, value, onChange, name }) {
    return (
        <Container>
            <InputText
                name={name}
                style={{ color: '#aaa' }}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </Container>
    )
}