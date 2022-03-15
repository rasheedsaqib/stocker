import {Link} from "react-router-dom";
import {useState} from "react";

const Table = () => {

    const [dataList] = useState([
        {name: 'Oil', actual: 2, chg: 3, chgP: 4},
        {name: 'Oil', actual: 2, chg: 3, chgP: 4},
        {name: 'Oil', actual: 2, chg: 3, chgP: 4},
        {name: 'Oil', actual: 2, chg: 3, chgP: 4},
        {name: 'Oil', actual: 2, chg: 3, chgP: 4},
        {name: 'Oil', actual: 2, chg: 3, chgP: 4},
        {name: 'Oil', actual: 2, chg: 3, chgP: 4},
    ]);

    const types = ['Commodity', 'Forex', 'Index', 'Stock', 'Bond', 'Crypto'];

    const [selectedType, setSelectedType] = useState(0);

    return(
        <div className='container my-5'>
            <div className='col-12'>

                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center">
                            Table
                        </h2>
                    </div>
                </div>

                <br />

                <div style={{overflowX: 'auto'}}>

                    <table className="table text-center theme-table">
                        <thead>
                        <tr>
                            {types.map((type, index) => {
                                return <th key={type} className={selectedType === index ? 'text-primary' : ''}><span onClick={() => setSelectedType(index)}>{type}</span></th>
                            })}
                        </tr>
                        </thead>
                    </table>

                    <table className="table table-striped text-center" style={{width: '100%'}}>
                        <thead>
                        <tr>
                            <th scope="col" />
                            <th scope="col">Actual</th>
                            <th scope="col">Chg</th>
                            <th scope="col">Chg%</th>
                        </tr>
                        </thead>
                        <tbody>
                        {dataList.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.name} </td>
                                    <td>{data.actual}</td>
                                    <td>{data.chg}</td>
                                    <td>{data.chgP}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table;