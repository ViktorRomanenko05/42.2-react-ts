import {useNavigate} from "react-router-dom";
import { Footer, Header, LayoutComponent, NavContainer, LogoContainer, Main, StyledNavLink } from "./styles"
import { LayoutProps } from "./types"

function Layout({ children }: LayoutProps) {

    const navigate = useNavigate();

    return (
        <LayoutComponent>
            <Header>
                <LogoContainer onClick={() => navigate('/')}></LogoContainer>
                <NavContainer>
                    <StyledNavLink to='/' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
                        Home
                    </StyledNavLink>
                    <StyledNavLink to='/about' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
                        About
                    </StyledNavLink>
                    <StyledNavLink to='/users' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
                        Users
                    </StyledNavLink>
                    <StyledNavLink to='/lesson13' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
                        Lesson13
                    </StyledNavLink>
                    <StyledNavLink to='/clients' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
                        Clients
                    </StyledNavLink>
                </NavContainer>
            </Header>
            <Main>
                {/* вместо prop children происходит подстановка различного контента в Layout при изменении url */}
                {children}
            </Main>
            <Footer><LogoContainer></LogoContainer></Footer>
        </LayoutComponent>
    )
}

export default Layout