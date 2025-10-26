interface User {
  id: string
  name: string
  img: string
  quote: string
}
type Props = {
  user: User
}

const ProfileCard = ({ user }: Props) => {
  return (
    <article id={user.id}>
      <figure>
        <img src={user.img} alt="profile-pic" width="800" height="800" />
        <figcaption>{user.name}</figcaption>
      </figure>
      <p>
        <q>{user.quote}</q>
      </p>
    </article>
  )
}

export default ProfileCard
