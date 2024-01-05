package icarosantos.ifood.model

import com.fasterxml.jackson.annotation.JsonProperty
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.OneToMany
import jakarta.persistence.Table

@Entity
@Table(name = "album")
data class Album(
    @Id
    @JsonProperty("albumId")
    val id: Int? = null,
    @OneToMany(mappedBy = "albumid")
    val images: List<Image> = ArrayList()
)
{ constructor(): this(null,)}