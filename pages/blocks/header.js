import { useRouter } from "next/router"

export default function Header() {
  const router = useRouter()

  return(
    <>
      <div>
        <ul style={{display:'flex', listStyle:'none', gap:'0 10px', padding:'0'}}>
          <li>
            <button type="button" onClick={()=>{router.push("/board/new")}}>글등록</button>
          </li>
          <li>
            <button type="button" onClick={()=>{router.push("/board/view/1")}}>글상세</button>
          </li>
        </ul>
      </div>
    </>
  )
}