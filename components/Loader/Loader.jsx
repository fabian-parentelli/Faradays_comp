import './loader.css';

// Imporrtar Spinner
import { Spinner } from '../Spinner/Spinner';

const Loader = ({ loading, color = 'gray' }) => {

    if (loading) return (
        <div className='loader'>
            <Spinner size={'50px'} color={color} />
        </div>
    );
};

export { Loader };