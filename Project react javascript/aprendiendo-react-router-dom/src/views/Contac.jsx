import { useMemo, } from "react"
import { useParams } from "react-router-dom"
import { getContact } from "../data/items";

export const Contact = () => {
  const { id } = useParams()
  // const [item, setItem] = useState({
  //   id: null,
  //   name: null,
  //   telephone: null,
  //   favorite: null,
  // });

  // useEffect(() => {
  //   const newItem = getContact(id);
  //   setItem(newItem);
  // }, [id])

  const item = useMemo(() => getContact(id), [id])
  return (
    <>
      <h1>Contact</h1>
      <div>
        <ul>
          <li>{ item?.id }</li>
          <li>{ item?.name }</li>
          <li>{ item?.telephone }</li>
          <li>{ item?.favorite ? "Si" : "No" }</li>
        </ul>
      </div>
    </>
  )
}