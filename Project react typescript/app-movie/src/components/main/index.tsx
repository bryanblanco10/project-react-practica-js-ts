import { FC } from "react"
import { Flex } from "../styled.components"
import { Carousel } from "./Carousel"
import { Info } from "./Info"

export const Main: FC = () => {
  return (
    <>
      <Flex>
        <Carousel />
        <Info />
      </Flex>
    </>
  )
}