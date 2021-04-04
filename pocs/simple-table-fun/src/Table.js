import { Component,Fragment } from "react";

const TableHead = () => {
        return(
            <Fragment>
             <thead>
                <p>Movies</p>         
                <tr>
                    <th>Tittle</th>
                    <th>Year</th>
                    <th>Cover</th>
                </tr>
             </thead>
            </Fragment>
        );
}

const TableBody = props => {

    const rows = props.movies.map( (row, index) => {
        return(
            <tr key={index} >
                <td><p>{row.tittle}</p></td>
                <td><p>{row.year}</p></td>
                <td><img src={row.cover} 
                style={{
                   width: 60,
                   height: 60,     
                }} /></td>                
            </tr>
        );
    });

    return(
        <tbody>
            {rows}
        </tbody>
    );
}

class Table extends Component{
    render(){

        const{movies} = this.props;

        return(
          <table className="centered highlight">
            <TableHead />
            <TableBody movies={movies} />
          </table>  
        );
    }
}

export default Table;