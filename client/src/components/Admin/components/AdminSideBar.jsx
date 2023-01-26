import Reac from 'react';
import st from './AdminSideBar.module.css';
import formulario from "../Assets/formulario.png";
import {
    Home,
    Timeline,
    TrendingUp,
    MailOutline,
    MoveToInbox,
    MarkChatUnread,
    AdminPanelSettings,
    PersonOutline,
    Groups2,
    Storage,
    Insights,
    EventAvailable,
} from '@mui/icons-material'
import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className={st.sidebar}>
            <div className={st.sidebarWrapper}>
                {/* <div className={st.sidebarMenu}>
                    <h3 className={st.sidebarTitle}>General</h3>
                    <ul className={st.sidebarList}>
                        <li className={st.sidebarListItem}>
                            <Link to="/admin" className={st.link}>
                                <Home className={st.sidebarIcon} />
                                Home
                            </Link>
                        </li>
                        <li className={st.sidebarListItem}>
                            <Timeline className={st.sidebarIcon} />
                            Analytics
                        </li>
                        <li className={st.sidebarListItem}>
                            <TrendingUp className={st.sidebarIcon} />
                            Sales
                        </li>
                    </ul>
                </div> */}
                <div className={st.sidebarMenu}>
                    <h3 className={st.sidebarTitle}>Users</h3>
                    <ul className={st.sidebarList}>
                        {/* <li className={st.sidebarListItem}>
                            <Link to="/admin/admins" className={st.link}>
                                <AdminPanelSettings
                                    className={st.sidebarIcon}
                                />
                                Admins
                            </Link>
                        </li> */}

                        <li className={st.sidebarListItem}>
                            <Link to="/admin/users" className={st.link}>
                                <Groups2 className={st.sidebarIcon} />
                                Users
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={st.sidebarMenu}>
                    <h3 className={st.sidebarTitle}>Products</h3>
                    <ul className={st.sidebarList}>
                        <li className={st.sidebarListItem}>
                            <Link to="/admin/products" className={st.link}>
                                <Insights className={st.sidebarIcon} />
                                Products
                            </Link>
                        </li>
                        <li className={st.sidebarListItem}>
                            <Link to="/admin/newproduct">
                                <img src={formulario} className={st.IconFormulario} alt='Logo'/>
                            </Link>
                        </li>
                    </ul>
                <div className={st.sidebarMenu}>
                    <h3 className={st.sidebarTitle}>Notifications</h3>
                    <ul className={st.sidebarList}>
                        {/* <li className={st.sidebarListItem}>
                            <a href="mailto:https://outlook.live.com/mail/0/" className={st.link}>
                                <MailOutline className={st.sidebarIcon} />
                                Web Mail
                            </a>
                        </li> */}
                        <li className={st.sidebarListItem}>
                            <Link
                                to="/admin/helpustoimprove"
                                className={st.link}
                                >
                                <MoveToInbox className={st.sidebarIcon} />
                                Help us to improve
                            </Link>
                        </li>
                        <li className={st.sidebarListItem}>
                            <Link
                                to="/admin/feedback"
                                className={st.link}
                                >
                                <MoveToInbox className={st.sidebarIcon} />
                                Feedbacks
                            </Link>
                        </li>
                    </ul>
                </div>

                        {/* <li className={st.sidebarListItem}>
                            <Link to="/admin/sales" className={st.link}>
                                <Storage className={st.sidebarIcon} />
                                Sales history
                            </Link>
                        </li>*/}
                </div>
            </div>
        </div>
    )
}
