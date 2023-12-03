import Container from "@/components/Layout/Container";
import Nav from "@/components/Nav/Nav";
import { DefaultComponentProps } from "@/shared/types";

interface LayoutProps extends DefaultComponentProps {
  title?: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Nav />
      <Container className="mt-8">
        {title && <h1 className="mb-8">{title}</h1>}
        {children}
      </Container>
    </>
  );
};

export default Layout;
