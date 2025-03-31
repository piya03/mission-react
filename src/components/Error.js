import { useRouteError } from "react-router-dom"

const Error = () => {
  const err = useRouteError()
  console.log("🚀 ~ Error ~ err:", err)

  return (
    <div>{err.error.message}</div>
  )
}

export default Error;