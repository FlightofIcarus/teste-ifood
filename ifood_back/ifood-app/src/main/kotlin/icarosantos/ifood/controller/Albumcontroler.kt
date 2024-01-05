package icarosantos.ifood.controller

import icarosantos.ifood.model.Album
import icarosantos.ifood.repository.AlbumRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/albums")
class Albumcontroler (private val repository: AlbumRepository) {

    @GetMapping
    fun listalbums(): List<Album> {
        return repository.findAll()
    }

    @GetMapping("/{id}")
    fun showalbum(@PathVariable id: Int): Album {
        return repository.getReferenceById(id)
    }
}

