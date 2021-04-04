import { Component,Fragment } from "react";

const TableHead = () => {
        return(
            <Fragment>
             <thead>
                <p style={{"textAlign": "left"}}>&nbsp;Movies</p>         
                <tr style={{background: "gray"}}  >
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
            <tr id="movies-row" key={index} 
               style={ 
                   index % 2? { background : "#BEBEBE" }:
                   { background : "#E8E8E8" 
                }}  
            >
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