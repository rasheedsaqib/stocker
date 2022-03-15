import {useMemo} from "react";
import {Chart} from 'react-charts';

const Graph = () => {

    const data = useMemo(
        () => [
            {
                label: 'Series 1',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: 'Series 2',
                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            }
        ],
        []
    )

    const axes = useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )

    return(
        <div className='container my-5'>
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center">
                        Graph
                    </h2>
                </div>
            </div>

            <br />

            <div className='mb-5' style={{width: '100%', height: '500px'}}>
                <Chart data={data} axes={axes} />
            </div>
        </div>
    )
}

export default Graph;