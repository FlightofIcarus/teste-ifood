package ifood.repository

import ifood.model.Image
import org.springframework.data.jpa.repository.JpaRepository


interface ImageRepository:JpaRepository<Image, Int> {

}

