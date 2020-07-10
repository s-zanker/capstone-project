import React from 'react'
import { useParams } from 'react-router-dom'

export default function WorkspaceDetail({ workspaces }) {
  let { id } = useParams()

  const { name, location, url, picture } = workspaces.find(
    (workspace) => workspace._id === id
  )

  console.log(name)
  return (
    <section>
      <img src={process.env.PUBLIC_URL + picture} alt="" />
      <h1>{name}</h1>
      <ul>
        <li>{location}</li>
        <li>{url}</li>
      </ul>
    </section>
  )
}
