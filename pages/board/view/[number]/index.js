import {
  Container,
  Wrapper
} from '../../../../styles/emotion'
import {
  PostInfoWrap,
  PostUserWrap,
  PostUserProfile,
  PostUserProfileImg,
  PostInfo,
  PostUserName,
  PostDate,
  PostAddInfoWrap,
  PostAddLinkButton,
  PostAddMarkerButton,
  PostAddLinkImg,
  PostAddMarkerImg,
  PostContWrap,
  PostContTitle,
  PostContImg,
  PostContText
} from '../style'
import Header from '../../../blocks/header'
import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId){
      writer
      title
      contents
      createdAt
    }
  }
`


export default function BoardViewPage() {
  const router = useRouter();

  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.number
    }
  })

  return(
    <>
      <Header></Header>
      <Container>
        <Wrapper>
          <PostInfoWrap>
            <PostUserWrap>
              <PostUserProfile>
                <PostUserProfileImg src="/img-no_profile.png"/>
              </PostUserProfile>
              <PostInfo>
                <PostUserName>{data?.fetchBoard.writer}</PostUserName>
                <PostDate>Date : {data?.fetchBoard.createdAt}</PostDate>
              </PostInfo>
            </PostUserWrap>
            <PostAddInfoWrap>
              <PostAddLinkButton>
                <PostAddLinkImg src="/icon-link.png" alt=""/>
              </PostAddLinkButton>
              <PostAddMarkerButton>
                <PostAddMarkerImg src="/icon-marker.png" alt=""/>
              </PostAddMarkerButton>
            </PostAddInfoWrap>
          </PostInfoWrap>
          <PostContWrap>
            <PostContTitle>{data?.fetchBoard.title}</PostContTitle>
            <PostContImg src="/img-post_cont.jpg" alt="" />
            <PostContText>{data?.fetchBoard.contents}</PostContText>
          </PostContWrap>
        </Wrapper>
      </Container>
    </>
  )
}