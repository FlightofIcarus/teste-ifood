package ifood

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.CrossOrigin

@SpringBootApplication
@CrossOrigin(origins = ["*"])
class AlbumApplication

fun main() {
	runApplication<AlbumApplication>()
}
