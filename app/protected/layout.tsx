import AuthRequired from "@/components/AuthRequired"

const Layout = ({ children }: any) => {
  return <AuthRequired>{children}</AuthRequired>;
}

export default Layout;
