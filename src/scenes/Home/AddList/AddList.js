import React from 'react'
import styled from 'styled-components'
import Overlay from 'components/Overlay'
import Button from 'ui/Button'
import Input from 'ui/Input'

export default function AddList ({ value, onChange, onSubmit, onCancel }) {
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Title>Create a list</Title>
        <Content>
          <Input
            placeholder='Your new list name'
            value={value}
            onChange={onChange}
          />
        </Content>
        <Actions>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
          <SubmitButton type='submit'>Create list</SubmitButton>
        </Actions>
      </Form>
    </Container>
  )
}

const Container = styled(Overlay)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Form = styled.form`
  width: 95%;
  max-width: 500px;
  background: #fff;
  box-shadow: 0 1px 13px rgba(0, 0, 0, .23);
  border-radius: 2px;
`

const Title = styled.div`
  padding: 12px;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(0, 0, 0, .15);
`

const Content = styled.div`
  padding: 12px;
`

const Actions = styled.div`
  padding: 12px;
  border-top: 1px solid rgba(0, 0, 0, .15);
  display: flex;
  justify-content: space-between;
`

const SubmitButton = styled(Button)`
  color: ${({ theme }) => theme.colors.primary};
`

const CancelButton = styled(Button)`
  opacity: .54;
`
