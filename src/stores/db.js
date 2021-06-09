import { decorate, observable } from "mobx";

class Users {
    user = [
        {id: 1, nombre: "Juan Manuel", fechaNacimiento: 1974, ciudad:"Mexico"},
        {id: 2, nombre: " Manuel", fechaNacimiento: 1980, ciudad:"Guanajuato"},
        {id: 3, nombre: "Juan", fechaNacimiento: 1985, ciudad:"Mexico"},
        {id: 4, nombre: "Pedro", fechaNacimiento: 1991, ciudad:"Tamaulipas"},
        {id: 5, nombre: "Carlos", fechaNacimiento: 1992, ciudad:"Celaya"},
        {id: 6, nombre: "Sergio", fechaNacimiento: 1999, ciudad:"Quintana Roo"},
        {id: 7, nombre: "Federico", fechaNacimiento: 1993, ciudad:"Chihuahua"},
        {id: 8, nombre: "Pablo", fechaNacimiento: 1975, ciudad:"Sonora"},
        {id: 9, nombre: "Jacinto", fechaNacimiento: 1976, ciudad:"Sinaloa"},
        {id: 10, nombre: "Martin", fechaNacimiento: 1979, ciudad:"Queretaro"},
        {id: 11, nombre: "Reynaldo", fechaNacimiento: 2001, ciudad:"Mexico"},
        {id: 12, nombre: "Alfredo", fechaNacimiento: 2005, ciudad:"Guanajuato"},
        {id: 13, nombre: "Jose", fechaNacimiento: 2007, ciudad:"San Luis de la Paz"},
        {id: 14, nombre: "Francisco", fechaNacimiento: 2009, ciudad:"Aguascalientes"},
        {id: 15, nombre: "Agustin", fechaNacimiento: 2010, ciudad:"Mexico"},
        {id: 16, nombre: "Juan Carlos", fechaNacimiento: 2011, ciudad:"Guanajuato"},
        {id: 17, nombre: "Ernesto", fechaNacimiento: 2013, ciudad:"Acapulco"},
        {id: 18, nombre: "Ivan", fechaNacimiento: 2015, ciudad:"Edo. Mex."},
        {id: 19, nombre: "Emiliano", fechaNacimiento: 2016, ciudad:"Veracruz"},
        {id: 20, nombre: "Maximiliano", fechaNacimiento: 2018, ciudad:"Oaxaca"},
        {id: 21, nombre: "Isabel", fechaNacimiento: 2019, ciudad:"Cuernavaca"},
        {id: 22, nombre: "Ricardo", fechaNacimiento: 1998, ciudad:"Mexico"},
        {id: 23, nombre: "Guadalupe", fechaNacimiento: 1980, ciudad:"Hidalgo"},
        {id: 24, nombre: "Yair", fechaNacimiento: 2010, ciudad:"Baja California"},
        {id: 25, nombre: "Miguel", fechaNacimiento: 2005, ciudad:"Mexico"}
    ]
}


const user = new Users();

export default user;