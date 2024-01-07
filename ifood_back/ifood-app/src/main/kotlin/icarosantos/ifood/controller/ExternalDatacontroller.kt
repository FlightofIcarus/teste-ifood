package ifood.controller

import ifood.model.Album
import ifood.model.ExternalData
import ifood.model.Image
import ifood.repository.AlbumRepository
import ifood.repository.ImageRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.client.RestTemplate

@RestController
@RequestMapping("/api")
class ExternalDatacontroller(
    @Autowired
    private val albumRepository: AlbumRepository,

    @Autowired
    private val imageRepository: ImageRepository
) {
    private val restTemplate = RestTemplate()

    @GetMapping("/load")
    fun dataLoad(): ResponseEntity<String> {


        val externalDataList = restTemplate.getForObject("https://jsonplaceholder.typicode.com/photos", Array<ExternalData>::class.java)


        if (externalDataList != null && externalDataList.isNotEmpty()) {

            for (externalData in externalDataList) {

                val findById = albumRepository.findById(externalData.albumId).orElseGet { albumRepository.save(Album(id = externalData.albumId)) }



                val newimage = Image(id = externalData.id, title = externalData.title, url = externalData.url, thumbnailurl = externalData.thumbnailUrl, albumid = externalData.albumId)
                imageRepository.save(newimage)
            }

            return ResponseEntity.ok("Dados salvos no banco de dados.")
        }

        return ResponseEntity.ok("Nenhum dado externo encontrado.")
    }
}