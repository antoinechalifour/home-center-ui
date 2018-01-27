import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MdClear from 'react-icons/lib/md/clear'
import Overlay from 'components/Overlay'
import Button from 'ui/Button'
import Input from 'ui/Input'

export default function AddRssSource ({
  value,
  sources,
  onChange,
  onSubmit,
  onCancel,
  onDelete
}) {
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Title>Manage your RSS sources</Title>
        <Content>
          <Sources>
            {sources.map(({ id, url }) => (
              <li key={id}>
                <span>{url}</span>
                <button type='button' onClick={() => onDelete(id)}>
                  <MdClear />
                </button>
              </li>
            ))}
          </Sources>
          <Input placeholder='Source url' value={value} onChange={onChange} />
        </Content>
        <Actions>
          <CancelButton type='button' onClick={onCancel}>Cancel</CancelButton>
          <SubmitButton>Add source</SubmitButton>
        </Actions>
      </Form>
    </Container>
  )
}

AddRssSource.propTypes = {
  value: PropTypes.string.isRequired,
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
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

const Sources = styled.ul`
  li {
    display: flex;
    align-items: center;
    padding: 12px 0;
  }

  li + li {
    border-top: 1px solid rgba(0, 0, 0, .1);
  }

  li span {
    flex: 1;
  }

  li button {
    margin-left: 8px;
    border: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    opacity: .54;
  }
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
