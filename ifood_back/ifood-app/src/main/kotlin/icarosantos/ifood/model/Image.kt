package ifood.model

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "image")
data class Image(
    @Id
    val id: Int?,
    val title: String?,
    val url: String?,
    val thumbnailurl: String?,
    @Column(name = "Album_id")
    val albumid: Int
)
{ constructor() : this(0,"","","",0) }