import styled from '@emotion/styled'

export const PostInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #bdbdbd;
`

export const PostUserWrap = styled.div`
  display: flex;
  align-items: center;
`

export const PostUserProfile = styled.div`
  overflow: hidden;
  position: relative;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #fff;
`

export const PostUserProfileImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
`

export const PostInfo = styled.div`
  margin-left: 16px;
`

export const PostUserName = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #000;
`

export const PostDate = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #828282;
`

export const PostAddInfoWrap = styled.div`
  display: flex;
  align-items: center;
`

export const PostAddLinkButton = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
`

export const PostAddMarkerButton = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
`

export const PostAddLinkImg = styled.img`
  width: 26px;
  height: auto;
`

export const PostAddMarkerImg = styled.img`
  width: 18px;
  height: auto;
`

export const PostContWrap = styled.div`
  padding: 80px 0 120px;
`

export const PostContTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #000;
`

export const PostContImg = styled.img`
  max-width: 100%;
  margin-top: 40px;
`

export const PostContText = styled.div`
  margin-top: 40px;
  font-size: 16px;
  font-weight: 400;
  color: #000;
`