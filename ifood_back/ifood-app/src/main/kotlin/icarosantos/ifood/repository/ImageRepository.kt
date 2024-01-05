package icarosantos.ifood.repository

import icarosantos.ifood.model.Image
import org.springframework.data.jpa.repository.JpaRepository


interface ImageRepository:JpaRepository<Image, Int> {

}

