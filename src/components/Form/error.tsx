import React from 'react'
import { useTranslation } from 'react-i18next'
import { AlertTriangle } from 'react-feather'
import styled from 'styled-components'
import { transparentize } from 'polished'

const FormErrorInner = styled.div`
  background-color: ${({ theme }) => transparentize(0.9, theme.red1)};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.825rem;
  width: 100%;
  padding: 3rem 1.25rem 1rem 1rem;
  margin-top: -2rem;
  color: ${({ theme }) => theme.red1};
  p {
    padding: 0;
    margin: 0;
    font-weight: 500;
  }
`

const FormErrorInnerAlertTriangle = styled.div`
  background-color: ${({ theme }) => transparentize(0.9, theme.red1)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-end: 12px;
  border-radius: 6px;
  min-width: 48px;
  height: 48px;
`

function ErrorBody({ error }: { error: string }) {
  return (
    <FormErrorInner>
      <FormErrorInnerAlertTriangle>
        <AlertTriangle size={24} />
      </FormErrorInnerAlertTriangle>
      <p>{error}</p>
    </FormErrorInner>
  )
}

export function FormError({ error }: { error: string }) {
  const { t } = useTranslation()
  return <ErrorBody error={t(error)} />
}
