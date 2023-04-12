import { useState } from 'react'
import { 
  Container, 
  Wrapper, 
  Title, 
  Group, 
  Child, 
  Label, 
  Input, 
  Textar,
  Zipcode,
  ZipcodeInput,
  SearchButton,
  UploadButton,
  RadioButton,
  RadioLabel,
  SubmitButton,
  Error
} from '../../../styles/emotion'
import { gql, useMutation } from '@apollo/client'

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
    }
  }
`

export default function BoardNewPage() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD)

  const onChangeWriter = (event) => {
    setWriter(event.target.value)
    if(event.target.value !== ""){
      setWriterError("")
    }
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
    if(event.target.value !== ""){
      setPasswordError("")
    }
  }
  const onChangeTitle = (event) => {
    setTitle(event.target.value)
    if(event.target.value !== ""){
      setTitleError("")
    }
  }
  const onChangeContents = (event) => {
    setContents(event.target.value)
    if(event.target.value !== ""){
      setContentsError("")
    }
  }

  const onSubmit = async () => {
    if(!writer){
      setWriterError("작성자를 입력해주세요");
    }
    if(!password){
      setPasswordError("비밀번호를 입력해주세요");
    }
    if(!title){
      setTitleError("제목을 입력해주세요");
    }
    if(!contents){
      setContentsError("내용을 입력해주세요");
    }
    if(writer && password && title && contents){
      const result = await createBoard({
        variables: {
          createBoardInput: {
            /*
            writer: writer,
            password: password,
            title: title,
            contents: contents
            객체에서 key와 value명이 같다면 생략가능(shorthand-property)*/
            writer,
            password,
            title,
            contents
          }
        }
      })
      console.log(result)
      //alert("게시글이 등록되었습니다.");
    }
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Title>게시물 등록</Title>

          <Group mt={80}>
            <Child col={2}>
              <Label>작성자</Label>
              <Input type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter} />
              <Error>{writerError}</Error>
            </Child>
            <Child col={2}>
              <Label>비밀번호</Label>
              <Input type="password" placeholder="비밀번호를 입력해주세요." onChange={onChangePassword} />
              <Error>{passwordError}</Error>
            </Child>
          </Group>
          <Group mt={40}>
            <Child>
              <Label>제목</Label>
              <Input type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle} />
              <Error>{titleError}</Error>
            </Child>
          </Group>
          <Group mt={40}>
            <Child>
              <Label>내용</Label>
              <Textar cols="30" rows="10" placeholder="내용을 작성해주세요." onChange={onChangeContents} />
              <Error>{contentsError}</Error>
            </Child>
          </Group>
          <Group mt={16}>
            <Child>
              <Label>주소</Label>
              <Zipcode type="text" placeholder="07250" />
              <SearchButton>우편번호 검색</SearchButton>
              <ZipcodeInput type="text" />
              <ZipcodeInput type="text" />
            </Child>
          </Group>
          <Group mt={40}>
            <Child>
              <Label>유튜브</Label>
              <Input type="text" placeholder="링크를 복사해주세요." />
            </Child>
          </Group>
          <Group mt={40}>
            <Child>
              <Label>사진 첨부</Label>
              <UploadButton>+</UploadButton>
              <UploadButton>+</UploadButton>
              <UploadButton>+</UploadButton>
            </Child>
          </Group>
          <Group mt={40}>
            <Child>
              <Label>메인 설정</Label>
              <RadioButton type="radio" id="youtube" name="radio-button" />
              <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
              <RadioButton type="radio" id="image" name="radio-button" />
              <RadioLabel htmlFor="image">사진</RadioLabel>
            </Child>
          </Group>
          <SubmitButton onClick={onSubmit}>등록하기</SubmitButton>
        </Wrapper>
      </Container>
    </>
  )
}