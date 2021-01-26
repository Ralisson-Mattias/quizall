import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`

const Button = styled.button`
    width: 100%;
    margin: 20px 0 0 0;
    padding: 10px 0%;
    font-weight: bold;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
    color: '#fff';
    border: none;
    outline: none;

    &:disabled {
        background-color: '#000';
    }
    
    
`

export default function Input({ name, type, disabled }) {
    return (
        <Container>
            <Button
                type={type}
                disabled={disabled}
            >
                Jogar como {name}
            </Button>
        </Container>
    )
}