import styled from '@emotion/styled'

export const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 100px;
  font-family: 'Noto Sans CJK KR', sans-serif;
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
  justify-content: center;
  align-content: center;
  align-item: center;
  gap: 10px 24px;
  margin-top: ${props => (props.mt ? props.mt+'px' : '0')};
`

export const Label = styled.div`
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
  box-sizing: border-box;
`

export const Textar = styled.textarea`
  width: 100%;
  height: 480px;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  box-sizing: border-box;
`

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  vertical-align: middle;
`;

export const ZipcodeInput = styled.input`
  width: 100%;
  height: 52px;
  margin-top: 16px;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  box-sizing: border-box;
`

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  border: 1px solid #000;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: #000;
  box-sizing: border-box;
  vertical-align: middle;
  margin-left: 16px;
  font-family: 'Noto Sans CJK KR', sans-serif;
`

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #eee;
  margin-right: 24px;
  font-size: 30px;
  color: #666;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: 'Noto Sans CJK KR', sans-serif;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  display: block;
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  margin: 80px auto 0;
  cursor: pointer;
  background-color: #FFD600;
  box-sizing: border-box;
  font-family: 'Noto Sans CJK KR', sans-serif;
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;