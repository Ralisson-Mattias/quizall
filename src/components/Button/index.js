import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.contrastText};
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 0;    
    outline: 0;

    width: 100%;
    margin: 20px 0 0 0;
    padding: 10px 0;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;
    color: '#fff';
    cursor: pointer;

    &:hover,
    &:focus {
        opacity: .5;
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.disabled};
        cursor: not-allowed;
    }
    
`

export default function Input({ disabled, text }) {
    return (
        <Container>
            <Button
                type="submit"
                disabled={disabled}
            >
                {text}
            </Button>
        </Container>
    )
}