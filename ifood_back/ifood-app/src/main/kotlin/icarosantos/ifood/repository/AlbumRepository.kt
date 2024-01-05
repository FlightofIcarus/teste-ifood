package icarosantos.ifood.repository

import icarosantos.ifood.model.Album
import org.springframework.data.jpa.repository.JpaRepository

interface AlbumRepository:JpaRepository<Album, Int> {

}