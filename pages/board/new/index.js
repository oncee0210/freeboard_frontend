import TextArea from 'antd/es/input/TextArea'
import { 
  Container, 
  Wrapper, 
  Title, 
  Group, 
  Child, 
  Label, 
  Input, 
  Textar
} from '../../../styles/emotion'

export default function BoardNewPage() {
  return (
    <div>
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
        </Wrapper>
      </Container>
    </div>
  )
}