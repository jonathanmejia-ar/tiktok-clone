import { LayoutContainer } from '../theme';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
    return (
        <LayoutContainer>
            <nav>
                <Header></Header>
            </nav>
            <main>
                {props.children}
            </main>
            <Footer></Footer>
        </LayoutContainer>
    )
};

export default Layout;