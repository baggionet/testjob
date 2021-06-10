import React from 'react';
import { inject} from "mobx-react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './sass/dashboard.sass';



const fechaNow = new Date();
const yearNow = fechaNow.getFullYear();
var res;



  

class Tabla extends React.Component {
    
    render() {
   
        const  { Users } = this.props;
        console.log(Users.user.length);
        return (<div className="tabla">
        <TableContainer>
            <h2>Tabla de Usuarios</h2>
            <table aria-label="Tabla">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Fecha Nacimiento</TableCell>
                        <TableCell>Adulto/Niño</TableCell>
                        <TableCell>Ciudad</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {Users.user.map(user => (
                        <TableRow key={user.id} >
                            <TableCell className="tableBody">{user.id}</TableCell>
                            <TableCell>{user.nombre}</TableCell>
                            <TableCell>{user.fechaNacimiento}</TableCell>
                            <span style={{display:'none'}}>{res = yearNow - user.fechaNacimiento}</span>
                            <TableCell>
                                {
                                    
                                    res >= 18 ? "Adulto" : "Niño"
                                }
                            </TableCell>
                            <TableCell>{user.ciudad}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </table>
        </TableContainer>
        
      </div>
        )
    }
}


export default inject("Users")(Tabla);