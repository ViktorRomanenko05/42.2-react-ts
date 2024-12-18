import { useState } from "react"

import Section from "../Section/Section"
import { MainCardTitle, MainCardWrapper } from "./styles"
import { UserData } from "./types"


function MainCard() {
  const [userData, setUserData] = useState<UserData>({
    firstName: 'Bart',
    lastName: 'Simpson',
    age: 11
  })

  return (
    <MainCardWrapper>
      <MainCardTitle>Main Card</MainCardTitle>
      <Section />
    </MainCardWrapper>
  )
}

export default MainCard