import React from 'react'
import { ScrollGallery } from '../../components/Cards/ScrollGallery/ScrollGallery'
import AnimatedRoute from "../../AnimatedRoute";

function Gallery({openModal}) {
  return (
    <section id='gallery'>
        <ScrollGallery openModal={(component) => openModal(component)} />
    </section>
  )
}

export default AnimatedRoute(Gallery);