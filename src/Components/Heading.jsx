
import PropTypes from 'prop-types';

const Heading = ({title}) => {
    return (
        <div className="font-bold text-5xl text-center "> 
            <h1>{title}</h1>
        </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string.isRequired
}
export default Heading;