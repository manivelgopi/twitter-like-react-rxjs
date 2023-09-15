import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import Button from '../button/Button';


export default function PeopleList() {
    return (
        <>
            <li>
                <NavLink className="header-link-items-profile" to='#'>
                    <div className="header-link-icon-wrap">
                        <div className="account-icon">
                            <FontAwesomeIcon icon={faUser} size='xl' />
                        </div>
                        <div className="account-text">
                            <span className="account-text-primay text-bold">IBM Data & AI</span>
                            <span className="account-text-secondary small-text text-secondary">@IBMData</span>
                        </div>
                        <Button type='button' className='btn-secondary btn-sm'>Follow</Button>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink className="header-link-items-profile" to='#'>
                    <div className="header-link-icon-wrap">
                        <div className="account-icon">
                            <FontAwesomeIcon icon={faUser} size='xl' />
                        </div>
                        <div className="account-text">
                            <span className="account-text-primay text-bold">IBM Cloud</span>
                            <span className="account-text-secondary small-text text-secondary">@IBMcloud</span>
                        </div>
                        <Button type='button' className='btn-secondary btn-sm'>Follow</Button>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink className="header-link-items-profile" to='#'>
                    <div className="header-link-icon-wrap">
                        <div className="account-icon">
                            <FontAwesomeIcon icon={faUser} size='xl' />
                        </div>
                        <div className="account-text">
                            <span className="account-text-primay text-bold">IBM Data & AI</span>
                            <span className="account-text-secondary small-text text-secondary">@IBMData</span>
                        </div>
                        <Button type='button' className='btn-secondary btn-sm'>Follow</Button>
                    </div>
                </NavLink>
            </li>
        </>
    )
}
