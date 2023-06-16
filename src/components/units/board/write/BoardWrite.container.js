import { useState } from "react";
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'

export default function BoardWrite(){
    const router = useRouter()

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD)

  let default_isReq = false;
  const [isReq, setIsReq] = useState(default_isReq);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if(event.target.value !== ""){
      setWriterError("")
    }
    if(event.target.value && password && title && contents) {
      setIsReq(true)
    } else {
      setIsReq(false)
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if(event.target.value !== ""){
      setPasswordError("")
    }
    if(writer && event.target.value && title && contents) {
      setIsReq(true)
    } else {
      setIsReq(false)
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if(event.target.value !== ""){
      setTitleError("")
    }
    if(writer && password && event.target.value && contents) {
      setIsReq(true)
    } else {
      setIsReq(false)
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if(event.target.value !== ""){
      setContentsError("")
    }
    if(writer && password && title && event.target.value) {
      setIsReq(true)
    } else {
      setIsReq(false)
    }
  };

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents
            }
          }
        })
        console.log(result.data.createBoard._id)
        router.push(`/boards/${result.data.createBoard._id}`)
      } catch(error) {
        alert(error.message)
      }
    }
  };

  return (
    <BoardWriteUI
        writerError={writerError}
        passwordError={passwordError}
        titleError={titleError}
        contentsError={contentsError}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickSubmit={onClickSubmit}
        isReq={isReq}
    />
  )
}