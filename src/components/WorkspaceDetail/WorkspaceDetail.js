import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import TagList from '../TagList/TagList'

export default function WorkspaceDetail({ workspaces }) {
  let { id } = useParams()

  const iconPathArrow = '/icons/arrow-left.svg'

  const {
    name,
    description,
    location,
    street,
    postcode,
    url,
    email,
    phone,
    picture,
    tags,
  } = workspaces.find((workspace) => workspace._id === id)

  return (
    <section>
      <Link to="/">
        <img src={iconPathArrow} alt="" />
      </Link>
      <ImageStyled src={picture} alt="" />
      <h2>{name}</h2>
      <div className="p-green">{description}</div>
      <br />
      <h4>Kontakt</h4>
      <div className="p-green">{street}</div>
      <div className="p-green">
        {`${postcode}
        ${location}`}
      </div>
      <br />
      <div className="p-green">{phone}</div>
      <div className="p-green">
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div className="p-green">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      </div>
      <br />
      <TagList tagList={tags} clickable={false} />
    </section>
  )
}

const ImageStyled = styled.img`
  margin-top: 10px;
  margin-bottom: 10px;
`
