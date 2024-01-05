package icarosantos.ifood.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/")

class Hellocontroler {

    @GetMapping
    fun hello(): String {
return "Hello world alterado!!!"
    }
}

