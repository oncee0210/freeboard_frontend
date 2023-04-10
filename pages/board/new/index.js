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
  SubmitButton
} from '../../../styles/emotion'

export default function BoardNewPage() {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>게시물 등록</Title>

          <Group mt={80}>
            <Child col={2}>
              <Label for="">작성자</Label>
              <Input type="text" placeholder="이름을 적어주세요." />
            </Child>
            <Child col={2}>
              <Label for="">비밀번호</Label>
              <Input type="password" placeholder="비밀번호를 입력해주세요." />
            </Child>
          </Group>
          <Group mt={40}>
            <Child>
              <Label for="">제목</Label>
              <Input type="text" placeholder="제목을 작성해주세요." />
            </Child>
          </Group>
          <Group mt={40}>
            <Child>
              <Label for="">내용</Label>
              <Textar cols="30" rows="10" placeholder="내용을 작성해주세요." />
            </Child>
          </Group>
          <Group mt={16}>
            <Child>
              <Label for="">주소</Label>
              <Zipcode type="text" placeholder="07250" />
              <SearchButton>우편번호 검색</SearchButton>
              <ZipcodeInput type="text" />
              <ZipcodeInput type="text" />
            </Child>
          </Group>
          <Group mt={40}>
            <Child>
              <Label for="">유튜브</Label>
              <Input type="text" placeholder="링크를 복사해주세요." />
            </Child>
          </Group>
          <Group mt={40}>
            <Child>
              <Label for="">사진 첨부</Label>
              <UploadButton>+</UploadButton>
              <UploadButton>+</UploadButton>
              <UploadButton>+</UploadButton>
            </Child>
          </Group>
          <Group mt={40}>
            <Child>
              <Label for="">메인 설정</Label>
              <RadioButton type="radio" id="youtube" name="radio-button" />
              <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
              <RadioButton type="radio" id="image" name="radio-button" />
              <RadioLabel htmlFor="image">사진</RadioLabel>
            </Child>
          </Group>
          <SubmitButton>등록하기</SubmitButton>
        </Wrapper>
      </Container>
    </>
  )
}