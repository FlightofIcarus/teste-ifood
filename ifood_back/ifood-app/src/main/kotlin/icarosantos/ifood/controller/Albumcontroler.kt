package ifood.controller

import ifood.model.Album
import ifood.repository.AlbumRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class Albumcontroler (private val repository: AlbumRepository) {

    @GetMapping("/albums")
    fun listalbums(): List<Album> {
        return repository.findAll()
    }

    @GetMapping("/album/{id}")
    fun showalbum(@PathVariable id: Int): Album {
        return repository.getReferenceById(id)
    }
}

