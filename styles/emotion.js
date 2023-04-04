import styled from '@emotion/styled'

export const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 100px;
`

export const Wrapper = styled.div`
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
`

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #000;
  text-align: center;
`

export const Child = styled.div`
  width: ${props => (props.col ? 'calc(100% / '+props.col+')' : '100%')};
`

export const Group = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-item: center;
  gap: 10px 24px;
  margin-top: ${props => (props.mt ? props.mt+'px' : '0')};
`

export const Label = styled.label`
  display: block;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #000;
`

export const Input = styled.input`
  width: 100%;
  height: 52px;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  color: #000;
`

export const Textar = styled.textarea`
  width: 100%;
  height: 480px;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  color: #000;
`