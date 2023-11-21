import {Link} from 'react-router-dom';
const Nav = () => {
    return (
        <div>
            <h1>navbar</h1>
            <ul className="navList">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/routerproptest'>routerproptest</Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
