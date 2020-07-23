import React from 'react'
import Workspace from './Workspace'

export default {
  title: 'Workspace',
  component: Workspace,
}

export const withMockData = () => (
  <Workspace
    workspace={{
      _id: '5f0734c2af7264771ca52652',
      name: 'Alsenhof',
      description:
        'Gemeinsam lassen wir nördlich von Hamburg einen nachhaltigen, innovativen und offenen Lebens- und Arbeitsort im Grünen entstehen!',
      location: 'Lägerdorf',
      street: 'Dorfstraße 15',
      postcode: '25566',
      state: 'Schleswig-Holstein',
      url: 'https://www.alsenhof.de',
      email: 'ulrich@coworkland.de',
      phone: '+49 40 60942876',
      picture: '/images/justin-lim-acGAEEMguPo-unsplash.jpg',
    }}
  />
)

export const withoutAnUrl = () => (
  <Workspace
    workspace={{
      _id: '5f0734c2af7264771ca52652',
      name: 'Alsenhof',
      description:
        'Gemeinsam lassen wir nördlich von Hamburg einen nachhaltigen, innovativen und offenen Lebens- und Arbeitsort im Grünen entstehen!',
      location: 'Lägerdorf',
      street: 'Dorfstraße 15',
      postcode: '25566',
      state: 'Schleswig-Holstein',
      url: '',
      email: 'ulrich@coworkland.de',
      phone: '+49 40 60942876',
      picture: '/images/justin-lim-acGAEEMguPo-unsplash.jpg',
    }}
  />
)

export const withoutAnImage = () => (
  <Workspace
    workspace={{
      _id: '5f0734c2af7264771ca52652',
      name: 'Alsenhof',
      description:
        'Gemeinsam lassen wir nördlich von Hamburg einen nachhaltigen, innovativen und offenen Lebens- und Arbeitsort im Grünen entstehen!',
      location: 'Lägerdorf',
      street: 'Dorfstraße 15',
      postcode: '25566',
      state: 'Schleswig-Holstein',
      url: 'https://www.alsenhof.de',
      email: 'ulrich@coworkland.de',
      phone: '+49 40 60942876',
      picture: ' ',
    }}
  />
)
