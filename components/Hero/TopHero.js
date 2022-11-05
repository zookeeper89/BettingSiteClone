import { Image } from '@mantine/core';

export default function TopHero(props) {
  return (
    <>
       <Image
       
        src={props.image}
        alt="Random unsplash image"
      />
    </>
  )
}