import {getSanityQuery, StyledButton} from "../libs/services/src";

export default function Home() {
  const data = getSanityQuery()
  console.log('data: ', data)
  return (
    <div>
      blep
      <StyledButton>Button</StyledButton>
    </div>
  )
}
