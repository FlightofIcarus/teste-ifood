package ifood.model

import jakarta.persistence.Id


data class ExternalData(
    @Id
    val albumId: Int,
    val id: Int,
    val title: String,
    val url: String,
    val thumbnailUrl: String
)
{ constructor() : this( 0,0, "", "", "")}
