//Se crea con función constructora la clase padre "Multimedia" que recibe el url, se le crea los métodos get y set, y otro método setInicio

class Multimedia {
    constructor(url) {
        this._url = () => url
    }

    get url() {
        return this._url()
    }

    set url(new_url) {
        return this._url = () => new_url
    }

    setInicio() {
        return `Este método es para realizar un cambio en la URL del video`
    }
}
// Se crea con la función constructora la clase "Reproductor", que hereda el atributo url de Multimedia, y recibe además la id. Se le crea get y set.
//Se le crea a esta clase el método playMultimedia que llamará la función pública para enviar url y el id
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        this._id = () => id
    }

    get id() {
        return this._id()
    }

    set id(new_id) {
        return this._id = () => new_id
    }

    playMultimedia() {
        video.inyectarVideo(this.url,this.id)
    }

    setInicio (tiempo) {
        let new_url = this.url + "?start=" + tiempo
        video.inyectarVideo(new_url,this.id)
        console.log(new_url)
    }

}
//Crear una función privada "video" que recibe url del video e id del iframe, para mostrar los videos en el HTML. Se utilizó “setAttribute” para manipular el DOM.
//Esta función retorna la función pública "inyectarVideo"que recibe el url y el id y llama a la función interna para insertar esos elementos

    let video = (() => {
        miVideo = (url, id) => {
            let iframe = document.getElementById(id)
            iframe.setAttribute("src",url)
        };
        return { 
            inyectarVideo: function (url,id) {
                miVideo(url,id)
            }
        }
    })()

    //Instanciar la clase hija Reproductor, dandole los argumentos de la URL y el id para cada etiqueta iframe
    let reproductor= new Reproductor("https://www.youtube.com/embed/JOKc0ghT9Gs", "frameMusica")
    let reproductor2= new Reproductor("https://www.youtube.com/embed/biSK2FWShZo", "framePeliculas")
    let reproductor3 = new Reproductor ("https://www.youtube.com/embed/R15Mpgq7HOc?list=PLY2UbF1f6SAclrJomSirKQ6yG_NlJzKqq", "frameSeries")

    
//Invocar el método playMultimedia para cada instancia, y mostrar así los videos en el documento
    reproductor.playMultimedia()
    reproductor2.playMultimedia()
    reproductor3.playMultimedia()

    
//Utilizar el método setInicio para modificar el tiempo de inicio en una de las instancias.
reproductor.setInicio(222)
